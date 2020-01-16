import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import { addAppointment, addAppointmentTime, updateTimeById } from '../../../App/actions';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            onModalOpen: false,
            time: '',
            author: '',
            selected: ''
        };
    }

    onClickOpen = () => {
        this.setState({
           isOpen: !this.state.isOpen 
        });
    }
    onModalOpen = () => {
        this.setState({
           onModalOpen: !this.state.onModalOpen 
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit = e => {
        e.preventDefault();
        
        const newAppointment = {
            dateForAppointment: this.props.allDay.props.children
        }
        this.props.addAppointment(newAppointment);
        this.onModalOpen();
        this.onClickOpen();
    }

    onTimeSubmit = e => { 
        e.preventDefault();
        const newTime = {
            _id: this.props.times.add_appointment_id,
            time: this.state.time
        }
        this.props.addAppointmentTime(newTime);
        console.log(this.props)
    }
    
    onEditSubmit = e => {
        e.preventDefault();

        const editAppointmentTime = {
            _id: this.props.idForEdit,
            time: this.state.time,
            author: this.state.author,
            selected: this.state.selected
        }
        this.props.updateTimeById(editAppointmentTime)
    }
    
    render(){
        console.log(this.props.times)
        if(this.state.isOpen) {
            return (
                <div className="add-modal"> 
                    <span onClick={this.onClickOpen} className="closeBtnLogin">&times;</span>
                    <div className="add">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Date</label>
                            <input 
                                name="dateForAppointment" 
                                type="text" 
                                disabled 
                                value={this.props.allDay.props.children} 
                            />
                        </div>
                        <div>
                            <button 
                                className="btn-add" 
                                type="submit">
                                    Next
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            );
        } else if(this.state.onModalOpen){
            return (
                <div className="add-modal"> 
                    <span onClick={this.onModalOpen} className="closeBtnLogin">&times;</span>
                    <div className="add">
                    <form onSubmit={this.onTimeSubmit}>
                        <div>
                            <label>Enter Time</label>
                            <input
                                onChange={this.onChange}
                                name="time" 
                                type="text"
                                placeholder="08:00 - 20:00"
                                pattern="[0-9]{2}:[0-9]{2}"
                                value={this.state.time}
                            />
                        </div>
                        <div>
                            <button 
                                className="btn-add" 
                                type="submit">
                                    Submit
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            );
        }
        if(this.props.showEditor){
            return (
                <div className="add-modal"> 
                    <span className="closeBtnLogin">&times;</span>
                    <div className="add">
                    <form onSubmit={this.onEditSubmit}>
                        <div>
                            <label>Enter Time</label>
                            <input
                                onChange={this.onChange}
                                name="time" 
                                type="text"
                                placeholder="08:00 - 20:00"
                                pattern="[0-9]{2}:[0-9]{2}"
                                value={this.state.time}
                            />
                            <label>Author</label>
                            <input
                                onChange={this.onChange}
                                name="author" 
                                type="text"
                                placeholder="Name"
                                value={this.state.author}
                            />
                            <div className="select">
                                <select name="selected" onChange={this.onChange}>
                                    <option>Select Style</option>
                                    <option value="Classic">Classic</option>
                                    <option value="Volume">Volume</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button 
                                className="btn-add" 
                                type="submit">
                                    Submit
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            );
        }
        return <button onClick={this.onClickOpen} className="btn-dash-add">Add</button>;
    };
};

const mapStateToProps = state => {
    return {dates: state.dates}
}

export default connect(
    mapStateToProps, 
    { 
        addAppointment, 
        addAppointmentTime,
        updateTimeById
    })(Login);