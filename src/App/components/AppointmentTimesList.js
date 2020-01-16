import React from 'react';
import { connect } from 'react-redux';
import { fetchAppointmentsTime } from '../actions';

class AppointmentTimesList extends React.Component {
    componentDidMount(){
        this.props.fetchAppointmentsTime(this.props.appointmentsId);
    }

    render() {
        console.log(this.props)
        const { times } = this.props.times;
        return (
            <div>
                {
                    times.map(({ _id, time, author }) => {
                        if(author){
                            return null;
                        }
                        return (
                            <p key={_id}>{time}</p>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { times: state.times }
}

export default connect(
    mapStateToProps, 
    { fetchAppointmentsTime }
    )(AppointmentTimesList);