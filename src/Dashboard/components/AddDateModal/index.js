import React from 'react';
import './index.css';

import {connect} from 'react-redux';
import {
	fetchAppointmentsTime,
	addAppointmentTime,
	updateTimeById,
	deleteAppointmentTime,
} from '../../../App/actions';

class EditingModal extends React.Component {
	state = {
		addTimeModalOpen: false,
		editTimeModal: false,
		idForEdit: '',
		time: '',
		author: '',
		selected: '',
	};
	componentDidMount() {
		this.props.fetchAppointmentsTime(this.props.dateId);
	}

	addTimeModalOpen = () => {
		this.setState({
			addTimeModalOpen: !this.state.addTimeModalOpen,
		});
	};

	editTimeModal = (_id) => {
		this.setState({
			editTimeModal: !this.state.editTimeModal,
			idForEdit: _id,
		});
	};

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const newTime = {
			_id: this.props.dateId,
			time: this.state.time,
		};
		this.props.addAppointmentTime(newTime);
		this.addTimeModalOpen();
	};

	onEditSubmit = (e) => {
		e.preventDefault();
		if (this.state.time === '') {
			return null;
		} else if (this.state.author === '') {
			return window.confirm('Are you sure your author input is empty?');
		}

		const editAppointmentTime = {
			_id: this.state.idForEdit,
			time: this.state.time,
			author: this.state.author,
			selected: this.state.selected,
		};
		this.props.updateTimeById(editAppointmentTime);
		this.editTimeModal();
	};

	renderAddTimeModal() {
		return (
			<div className="add-modal">
				<span onClick={this.addTimeModalOpen} className="closeBtnLogin">
					&times;
				</span>
				<div className="add">
					<form onSubmit={this.onSubmit}>
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
							<button className="btn-add" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	renserEditTimeModal() {
		const {times} = this.props.times;
		const time = times.find((date) => date._id === this.state.idForEdit);
		return (
			<div className="add-modal">
				<span onClick={this.editTimeModal} className="closeBtnLogin">
					&times;
				</span>
				<div className="add">
					<form onSubmit={this.onEditSubmit}>
						<div>
							<label>Enter Time</label>
							<input
								onChange={this.onChange}
								name="time"
								type="text"
								placeholder={time.time}
								pattern="[0-9]{2}:[0-9]{2}"
								value={this.state.time}
							/>
							<label>Author</label>
							<input
								onChange={this.onChange}
								name="author"
								type="text"
								placeholder={time.author}
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
							<button className="btn-add" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	onDeleteClick = (_id) => {
		this.props.deleteAppointmentTime(_id);
	};

	render() {
		const {times} = this.props.times;
		if (this.state.addTimeModalOpen) {
			return this.renderAddTimeModal();
		} else if (this.state.editTimeModal) {
			return this.renserEditTimeModal();
		}
		return (
			<div className="popup">
				{times.map(({_id, time, author, selected, dateId}) => {
					const className = author ? 'showColor' : 'show';
					if (dateId !== this.props.dateId) {
						return null;
					}
					return (
						<span key={_id} className="shows">
							<div className={className}>
								<span className="time">Time: {time}</span>
								<span>
									Author:<p className="time">{author}</p>
								</span>
								<span>
									Selected:<p className="time">{selected}</p>
								</span>
								<button onClick={this.onDeleteClick.bind(this, _id)} className="btn-dash-del-edit">
									X
								</button>
								<button onClick={this.editTimeModal.bind(this, _id)} className="btn-dash-del-edit">
									Edit
								</button>
							</div>
						</span>
					);
				})}
				<button onClick={this.addTimeModalOpen} className="btn-dash-add">
					Add Time
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {times: state.times};
};
export default connect(mapStateToProps, {
	fetchAppointmentsTime,
	addAppointmentTime,
	updateTimeById,
	deleteAppointmentTime,
})(EditingModal);
