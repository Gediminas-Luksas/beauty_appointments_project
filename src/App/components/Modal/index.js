import React from 'react';
import './index.css';

class SelectModal extends React.Component {
    state = {
        isSelectModalOpen: false,
        selected: ''
    }
    onModalOpen = () => {
        this.props.isOpen(this.state.isSelectModalOpen);
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmited = () => {
        if(this.state.selected === ''){
            return null;
        }
        this.props.isSelected(this.state.selected)
        this.onModalOpen()
    }
    
    render(){
        return (
            <div className="modal">
                <div className="modal-content">
                    <span onClick={this.onModalOpen.bind(this)} className="closeBtn">&times;</span>
                    <h4>Which one you want style</h4>
                    <div className="select">
                        <select name="selected" onChange={this.onChange}>
                            <option>Select Style</option>
                            <option value="Classic">Classic</option>
                            <option value="Volume">Volume</option>
                        </select>
                    </div>
                    <button onClick={this.onSubmited.bind(this)} className="btn-select" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        );

    };
};

export default SelectModal;