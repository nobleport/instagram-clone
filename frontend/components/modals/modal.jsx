import React from "react";
import ShowPost from "./show_post_container";
import NewPost from "./new_post_container"

class Modal extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        if (!this.props.modal){
            return null
        }
        let component;
        switch (this.props.modal) {
            case ('show-modal'):
                component = <ShowPost post={this.props.post}/>;
                break;
            case 'form-modal':
                component = <NewPost/>;
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e=> e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }
}

export default Modal;