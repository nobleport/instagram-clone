import React from "react";

class EditPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            caption: this.props.post.caption,
            imageUrl: this.props.post.photoUrl,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.preview = this.preview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateSubmitButton = this.generateSubmitButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
        if (this.state.imageFile){
            formData.append('post[photo]', this.state.imageFile);
        }
        
        this.props.updatePost(formData, this.props.post.id);
        this.props.closeModal();
    }

    generateSubmitButton(){
        if (this.state.imageUrl != ''){
            return <button className="form-share-button" type="submit">Share</button>
        }else{
            return <button className="disabled-form-share-button" disabled="disabled">Share</button>
        }
    }

    handleDelete(){
        this.props.deletePost(this.props.post.id)
        this.props.closeModal();
    }

    render(){
        
        return (
            <div className="form-container">
                <div className="form-header">
                    <div>Edit post</div>
                </div>
                <div className="bottom-form-section">
                    {this.preview()}
                    <div className="name-form">
                        <div className="right-side-header">
                            <img src={window.profileIcon}/> 
                            <div className="name-and-pic-form"><span className="username-in-form">{this.props.currentUser.username}</span></div>
                        </div>
                        
                        
                        <div className="actual-form-container edit-form-container-1">
                            <form className="new-post-form" onSubmit={(e)=>this.handleSubmit(e)}>
                                <textarea className="form-text-input" type="text" placeholder="Write a caption..." value={this.state.caption} onChange={this.handleInput}/>
                                <label className="form-file-input">
                                    <input className="drag-drop-button" type="file" title="hello?" onChange={this.handleFile}/>
                                </label>
                                {this.generateSubmitButton()}
                            </form>
                                <button className="delete-post form-share-button" onClick={this.handleDelete}>Delete post</button>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        )
    }

}

export default EditPost;