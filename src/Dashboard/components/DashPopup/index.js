import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { fetchAppointmentsDate, addAppointment, deleteAppointmentDate } from '../../../App/actions';
import AddFromModal from '../AddDateModal';

class DashPopup extends React.Component{
    state = {
        addDateModalOpen: false
    }
    componentDidMount(){
        this.props.fetchAppointmentsDate();
    }
   
    addDateModalOpen = () => {
        this.setState({
            addDateModalOpen: !this.state.addDateModalOpen
        })
    }

    onSubmit = e => {
        e.preventDefault();
        
        const newAppointment = {
            dateForAppointment: this.props.allDay.props.children
        }
        this.props.addAppointment(newAppointment);
        this.addDateModalOpen();
    }

    renderAddDateModal(){
        return(
            <div className="add-modal"> 
                <span onClick={this.addDateModalOpen} className="closeBtnLogin">&times;</span>
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

    onDeleteClick = _id => {
        this.props.deleteAppointmentDate(_id);
    }
   
    render(){
        const { dates } = this.props.dates;
        if(this.props.popup){
            if(this.state.addDateModalOpen){
                return this.renderAddDateModal();
            }
            return (
                <div>
                    { 
                        dates.map(({ _id, dateForAppointment }) => {
                            if(dateForAppointment === this.props.allDay.props.children){
                                return ( 
                                    <div key={_id}>
                                        <h2 className="dach-popup">{ dateForAppointment }
                                            <div className="spacer" /> 
                                            <button onClick={this.onDeleteClick.bind(this, _id)} className="btn-dash-delete">&times;</button>
                                        </h2>
                                            <AddFromModal 
                                                dateId={_id} 
                                                allDay={this.props.allDay} 
                                            />
                                    </div>
                                );
                            } 
                            return <button key={_id} onClick={this.addDateModalOpen} className="btn-dash-add">Add Date</button>;
                        }) 
                    }
                </div>
            );
        } 
        return <button onClick={this.addDateModalOpen} className="btn-dash-add">Add Date</button>;
    };
}

const mapsStateToProps = state => {
    return {
        dates: state.dates
    }
};

export default connect(mapsStateToProps, 
    { 
        fetchAppointmentsDate,
        addAppointment,
        deleteAppointmentDate
    })(DashPopup);