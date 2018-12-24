import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    state = {
        isVisible: false
    }

    setVisibility = (value) =>{
        if(this.state.isVisible !== value){
            this.setState({ isVisible: value})
        }
    }

    confirm = () => {
        this.setVisibility(false)
        this.props.onConfirm()
    }

    render() {
        const displayModal = this.state.isVisible ? {display: 'block'} : {display: 'none'};
        return(
            <>
                <div className="modal" style={displayModal} onClick={() => this.setVisibility(false)}>
                    <div className="modal-content" style={displayModal} onClick={e => e.stopPropagation()}>
                        <button onClick={() => this.setVisibility(false)} title="Close" className="close">X</button>
                        <h2>Are you sure?</h2>
                        <div>
                            <button onClick={this.confirm}>Confirm</button>
                            <button onClick={() => this.setVisibility(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
                <div onClick={() => this.setVisibility(true)}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;