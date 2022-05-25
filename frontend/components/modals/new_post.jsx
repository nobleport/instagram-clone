import React from "react";
import {createPost} from '../../actions/post_actions';

class NewPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            caption: "",
            
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.preview = this.preview.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        (this.state.imageUrl) ? ele = <img src={this.state.imageUrl}/> : ele = <div>Place image here</div>
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

    render(){

        return (
            <div>
                {this.preview()}
                <form className="new-post-form" onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="file" onChange={this.handleFile}/>
                    <input type="text" placeholder="Write a caption" onChange={this.handleInput}/>
                    <button type="submit">Share</button>
                </form>
            </div>
        )
    }

}

export default NewPost;