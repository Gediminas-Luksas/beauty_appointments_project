import api from '../apis/DB';
import {
	FETCH_APPOITMENTS_DATE,
	FETCH_APPOITMENTS_TIME,
	ADD_APPOITMENT,
	ADD_APPOITMENT_TIME,
	UPDATE_APPOITMENTS_TIME_BY_ID,
	DELETE_APPOITMENT_DATE,
	DELETE_APPOITMENT_TIME,
	APPOITMENTS_LOADING,
} from './types';

export const fetchAppointmentsDate = () => async (dispatch) => {
	const response = await api.get('/find');
	dispatch({type: FETCH_APPOITMENTS_DATE, payload: response.data});
};

export const fetchAppointmentsTime = () => async (dispatch) => {
	dispatch(setAppointmentsLoading());
	const response = await api.get('/find/times');
	dispatch({type: FETCH_APPOITMENTS_TIME, payload: response.data});
};

export const addAppointment = (appointment) => async (dispatch) => {
	const response = await api.post(`/create`, appointment);
	dispatch({type: ADD_APPOITMENT, payload: response});
	dispatch(fetchAppointmentsDate());
};

export const addAppointmentTime = (appointmentTime) => async (dispatch) => {
	const response = await api.post(`/create/${appointmentTime._id}`, appointmentTime);
	dispatch({type: ADD_APPOITMENT_TIME, payload: response.data});
	dispatch(fetchAppointmentsTime());
};

export const updateTimeById = (updateTime) => async (dispatch) => {
	const response = await api.patch(`/update/${updateTime._id}`, updateTime);
	dispatch({type: UPDATE_APPOITMENTS_TIME_BY_ID, payload: response.data});
	dispatch(fetchAppointmentsTime());
};

export const deleteAppointmentDate = (_id) => async (dispatch) => {
	await api.delete(`/delete/${_id}`);
	dispatch({type: DELETE_APPOITMENT_DATE, payload: _id});
	dispatch(fetchAppointmentsDate());
};

export const deleteAppointmentTime = (_id) => async (dispatch) => {
	await api.delete(`/delete/time/${_id}`);
	dispatch({type: DELETE_APPOITMENT_TIME, payload: _id});
	dispatch(fetchAppointmentsTime());
};

export const setAppointmentsLoading = () => {
	return {
		type: APPOITMENTS_LOADING,
	};
};
