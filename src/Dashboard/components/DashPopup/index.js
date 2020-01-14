import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { fetchAppointmentsDate, fetchAppointmentsTime, deleteAppointmentDate, deleteAppointmentTime } from '../../../App/actions';
import AddFromModal from '../AddDateModal';

class DashPopup extends React.Component{
    state = {
        showEditor: false,
        idForEdit: ''
    }
    componentDidMount(){
        this.props.fetchAppointmentsDate();
        this.props.fetchAppointmentsTime();
    }
    showEditor = (_id) => {
        this.setState({ 
            showEditor: !this.state.showEditor,
            idForEdit: _id
         })
    }
    onDeleteClick = _id => {
        this.props.deleteAppointmentDate(_id);
    }
    onTimeDeleteClick = _id => {
        this.props.deleteAppointmentTime(_id);
    }

    render(){
        const { appointments } = this.props.appointments;
        const { appointmentsTimes } = this.props.appointmentsTimes;
        if(this.props.popup){ 
            return (
                <div>
                    { 
                        appointments.map(({ _id, dateForAppointment }) => {
                            if(dateForAppointment === this.props.allDay.props.children){
                                return ( 
                                    <div key={_id}>
                                        <h2 className="dach-popup">{ dateForAppointment }
                                            <div className="spacer" /> 
                                            <button onClick={this.onDeleteClick.bind(this, _id)} className="btn-dash-delete">&times;</button>
                                        </h2>
                                        <div className="popup">
                                        {
                                            appointmentsTimes.map(({ _id, time, author, selected, date }) => {
                                                if(_id !== date){
                                                    return (    
                                                        <span key={_id} className="shows">
                                                            <div className="show">
                                                                <p className="time">Time: {time}</p>
                                                                <p>Author: {author}</p>
                                                                <p>Selected: {selected}</p>    
                                                                <button onClick={this.onTimeDeleteClick.bind(this, _id)} className="btn-dash-del-edit">X</button>
                                                                <button onClick={this.showEditor.bind(this, _id)} className="btn-dash-del-edit">Edit</button>
                                                            </div>
                                                        </span>    
                                                    );
                                                }
                                                return null;
                                            })
                                        }
                                        </div>

                                    </div>
                                );
                            } 
                            return null;
                        }) 
                    }
                    <AddFromModal idForEdit={this.state.idForEdit} showEditor={this.state.showEditor} allDay={this.props.allDay} />
                </div>
            );
        } 
        return "";
    };
}

const mapsStateToProps = state => {
    return {
        appointments: state.appointments,
        appointmentsTimes: state.appointments
    }
};

export default connect(mapsStateToProps, 
    { 
        fetchAppointmentsDate, 
        fetchAppointmentsTime, 
        deleteAppointmentDate,
        deleteAppointmentTime
    })(DashPopup);