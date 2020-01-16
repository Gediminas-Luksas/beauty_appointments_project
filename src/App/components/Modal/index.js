import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { updateTimeById } from '../../actions';

class SelectModal extends React.Component {
    state = {
        isSelectModalOpen: false,
        id: '',
        time: '',
        author: 'Facebook Login',
        selected: ''
    }
    onModalOpen = () => {
        this.props.isOpen(this.state.isSelectModalOpen);
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({
            id: this.props._id,
            time: this.props.time
        })
    };

    updateSubmit = () => {
        const editAppointmentTime = {
            _id: this.state.id,
            time: this.state.time,
            author: this.state.author,
            selected: this.state.selected
        }
        this.props.updateTimeById(editAppointmentTime);     
}
    
    onSubmited = e => {
        e.preventDefault();
        if(this.state.selected === ''){
            return null;
        }
        const editTime = {
            _id: this.state.id,
            time: this.state.time,
            author: this.state.author,
            selected: this.state.selected
        }
        this.props.updateTimeById(editTime);
        this.onModalOpen();
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
                    <button onClick={this.onSubmited} className="btn-select" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        );

    };
};

const mapStateToProps = state => {
    return { times: state.times }
}

export default connect(
    mapStateToProps, 
    { updateTimeById }
    )(SelectModal);