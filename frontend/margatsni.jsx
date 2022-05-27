import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./root";
import {login} from "./actions/session_actions";
import {createPost} from "./actions/post_actions";

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser){
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store ={store}/>, root)
    document.addEventListener("click", function(event){
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            } 
        }
    })
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    // window.createPost = createPost;
})