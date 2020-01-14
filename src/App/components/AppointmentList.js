import React from 'react';
import { connect } from 'react-redux';
import { fetchAppointmentsDate } from '../actions';
import SelectModal from '../components/Modal';

class AppointmentLists extends React.Component{
    state = {
        _id: '',
        isSelectModalOpen: false,
        selected: '',
        author: ''
    };
    constructor(props){
        super(props);
        this.completeTask = this.completeTask.bind(this )
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

    completeTask(_id) {

        console.log(_id)
    }
    
    componentDidMount(_id){
        this.props.fetchAppointmentsDate(_id);
    }
    
    render(){
        const allData = this.props.year +" "+ this.props.month +" "+ this.props.allDay;
        const { appointments } = this.props.appointments;
        return(
            <div className="calendar_date">
                <h2>Date and Time</h2>
                <h3>{allData}</h3>
                { !this.state.isSelectModalOpen ? 
                appointments.map(({ _id, dateForAppointment }) => {
                    if(dateForAppointment === allData){
                        return (
                            <span key={_id}>
                                    
                                <p>
                                <button onClick={this.onModalOpen} className="btn_time">
                                    {dateForAppointment}
                                </button>
                                </p>

                            </span>
                        );
                    }
                        return null;

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

const mapStateToProps = state => {
    return { appointments: state.appointments }
};

export default connect(mapStateToProps, 
    { fetchAppointmentsDate }
    )(AppointmentLists);