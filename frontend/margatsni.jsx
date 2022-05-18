import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./root"
import {login} from "./actions/session_actions"

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
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
})