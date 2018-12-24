import React, { Component } from 'react';
import './styles.css';
import Modal from '../../../../components/Modal/Modal';

class Footer extends Component {
    render() {
        const suffix = this.props.item === 1 ? '' : 's'
        return (
            <div className="footer">
                <div className="items_left">{`${this.props.item} item${suffix}`} </div>
                <div className="filter-buttons">
                    <button value="all" className="button__filter" onClick={() => this.props.onSend('all')}>All</button>
                    <button value="active" className="button__filter" onClick={() => this.props.onSend('active')}>Active</button>
                    <button value="completed" className="button__filter" onClick={() => this.props.onSend('completed')}>Completed</button>
                </div>
                <div>
                    <Modal onConfirm={this.props.onModal}>
                        <button className="button__end">Clear Completed</button>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Footer;