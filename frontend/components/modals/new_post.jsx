import React from "react";
import {createPost} from '../../actions/post_actions';

class NewPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            caption: "",
            imageUrl: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.preview = this.preview.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.generateSubmitButton = this.generateSubmitButton.bind(this)
    }

    handleInput(e){ 
        this.setState({caption: e.target.value})
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ imageUrl: "", imageFile: null });
        }
    }

    preview(){
        let ele;
        (this.state.imageUrl) ? ele = <div className="form-image-container black-background"><img  className="form-image" src={this.state.imageUrl}/><div className="cover-up"></div></div> : ele = <div className="form-image-container form-instruction-container"><div>Drag photos and videos here</div><div className="cover-up"></div></div>
        return ele
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.imageFile);
        this.props.createPost(formData);
        this.props.closeModal();
    }

    generateSubmitButton(){
        if (this.state.imageUrl != ''){
            return <button className="form-share-button" type="submit">Share</button>
        }else{
            return <button className="disabled-form-share-button" disabled="disabled">Share</button>
        }
    }

    

    render(){

        return (
            <div className="form-container">
                <div className="form-header">
                    <div>Create new post</div>
                </div>
                <div className="bottom-form-section">
                    {this.preview()}
                    <div className="name-form">
                        <div className="right-side-header">
                            <img src={window.profileIcon}/> 
                            <div className="name-and-pic-form"><span className="username-in-form">{this.props.currentUser.username}</span></div>
                        </div>
                        
                        
                        <div className="actual-form-container">
                            <form className="new-post-form" onSubmit={(e)=>this.handleSubmit(e)}>
                                <textarea className="form-text-input" type="text" placeholder="Write a caption..." onChange={this.handleInput}/>
                                <label className="form-file-input">
                                    <input className="drag-drop-button" type="file" title="hello?" onChange={this.handleFile}/>
                                </label>
                                {this.generateSubmitButton()}
                            </form>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        )
    }

}

export default NewPost;