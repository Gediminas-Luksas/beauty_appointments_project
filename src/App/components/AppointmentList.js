import React from 'react';
import SelectModal from '../components/Modal';

class AppointmentLists extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelectModalOpen: false,
            selected: '',
            author: '',
            appointments: [{
                id : "5e158e55735f181b0a17cb02",
                times : [
                    {time : "08:15 AM", author : "Gediminas",selected : "Volume"},
                    {time : "12:15 AM", author : "Gediminas",selected : ""},
                    {time : "15:00 AM", author : "",selected : "Volume"}
            ],
                date : "2020-01-08",
                dateForAppointment : "2020 January 10"
            }]
        };
    }

    onModalOpen = () => {
        this.setState({
            isSelectModalOpen: !this.state.isSelectModalOpen,
        });
    };

    onSelected = value => {
        this.setState({
            selected: value
        })
    }

    render(){
        const allData = this.props.year +" "+ this.props.month +" "+ this.props.allDay;
        const appointments  = this.state.appointments;
        return(
            <div className="calendar_date">
                <h2>Date and Time</h2>
                <h3>{allData}</h3>
                { !this.state.isSelectModalOpen ? 
                appointments.map(( date, id ) => {
                    return (
                        <span key={id}>
                            { date.times.map((time, i) => {
                                return (
                                    <p key={i}>
                                        <button onClick={this.onModalOpen} className="btn_time">
                                            {time.time}
                                        </button>
                                    </p>
                                )
                            }) }
                            <button key={id} onClick={this.onModalOpen} className="btn_time">
                                <p key={id}>{date.times.time}</p>
                            </button>
                        </span>
                    );
                }) 
                :
                    <SelectModal 
                        isOpen={this.onModalOpen.bind(this)} 
                        isSelected={this.onSelected.bind(this)}
                    />
                }
            </div>
        );
    }
}

export default AppointmentLists;