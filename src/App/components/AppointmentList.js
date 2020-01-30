import React from 'react';
import {connect} from 'react-redux';
import {fetchAppointmentsDate, fetchAppointmentsTime} from '../actions';
import SelectModal from '../components/Modal';

class AppointmentLists extends React.Component {
	state = {
		isSelectModalOpen: false,
		_id: '',
		time: '',
	};

	componentDidMount() {
		this.props.fetchAppointmentsDate();
		this.props.fetchAppointmentsTime();
	}

	onModalOpen = (_id, time) => {
		this.setState({
			isSelectModalOpen: !this.state.isSelectModalOpen,
			_id: _id,
			time: time,
		});
	};

	renderData() {
		const allData = this.props.year + ' ' + this.props.month + ' ' + this.props.allDay;
		return (
			<div>
				<h2>Date and Time</h2>
				<h3>{allData}</h3>
			</div>
		);
	}

	renderList() {
		const allData = this.props.year + ' ' + this.props.month + ' ' + this.props.allDay;
		const {dates} = this.props.dates;
		const {times} = this.props.times;
		return dates.map(({_id, dateForAppointment, timesId}) => {
			const id = _id;
			if (dateForAppointment === allData) {
				return (
					<span key={_id}>
						{times.map(({_id, time, author, dateId}) => {
							if (id !== dateId) {
								return null;
							} else if (author !== '') {
								return null;
							}
							return (
								<p key={_id}>
									<button onClick={this.onModalOpen.bind(this, _id, time)} className="btn_time">
										{time}
									</button>
								</p>
							);
						})}
					</span>
				);
			}
			return null;
		});
	}

	render() {
		return (
			<div className="calendar_date">
				{this.renderData()}
				{!this.state.isSelectModalOpen ? (
					this.renderList()
				) : (
					<SelectModal
						isOpen={this.onModalOpen.bind(this)}
						_id={this.state._id}
						time={this.state.time}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dates: state.dates,
		times: state.times,
	};
};

export default connect(mapStateToProps, {fetchAppointmentsDate, fetchAppointmentsTime})(
	AppointmentLists,
);
