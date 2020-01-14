import api from '../apis/DB';
import { 
    FETCH_APPOITMENTS_DATE,
    FETCH_APPOITMENTS_TIME,
    ADD_APPOITMENT,
    ADD_APPOITMENT_TIME,
    UPDATE_APPOITMENTS_TIME_BY_ID,
    GET_APPOITMENTS_DATE_BY_ID,
    DELETE_APPOITMENT_DATE,
    DELETE_APPOITMENT_TIME, 
    APPOITMENTS_LOADING
} from './types';

export const fetchAppointmentsDate = () => async dispatch => {
    dispatch(setAppointmentsLoading());
    const response = await api.get('/dates/find');
    dispatch({ type: FETCH_APPOITMENTS_DATE, payload: response.data });
    dispatch(fetchAppointmentsTime());
};

export const fetchAppointmentsTime = () => async dispatch => {
    const response = await api.get('/dates/find/times');
    dispatch({ type: FETCH_APPOITMENTS_TIME, payload: response.data });
};

export const addAppointment = appointment => async dispatch => {
    const response = await api.post(`/dates/create`, appointment);
    dispatch({ type: ADD_APPOITMENT, payload: response });
    const _id = response.data.date._id;
    dispatch(gettingIdFromAppointment(_id))
};

export const gettingIdFromAppointment = _id => async dispatch => {
    dispatch({ type: GET_APPOITMENTS_DATE_BY_ID, payload: _id });
}

export const addAppointmentTime = appointmentTime => async dispatch => {
    const response = await api.post(`dates/create/${appointmentTime._id}`, appointmentTime);
    dispatch({ type: ADD_APPOITMENT_TIME, payload: response.data });
    dispatch(fetchAppointmentsDate());
};

export const fetchTimeById = updateTime => async dispatch => {
    const response = await api.patch(`/dates/update/${updateTime._id}`, updateTime);
    dispatch({ type: UPDATE_APPOITMENTS_TIME_BY_ID, payload: response.data });
    dispatch(fetchAppointmentsTime());
};

export const deleteAppointmentDate = _id => async dispatch => {
    await api.delete(`/dates/delete/${_id}`);
        dispatch({ type: DELETE_APPOITMENT_DATE, payload: _id });
        dispatch(fetchAppointmentsDate());
};

export const deleteAppointmentTime = _id => async dispatch => {
    await api.delete(`/dates/delete/time/${_id}`);
        dispatch({ type: DELETE_APPOITMENT_TIME, payload: _id });
        dispatch(fetchAppointmentsTime());
};

export const setAppointmentsLoading = () => {
    return {
        type: APPOITMENTS_LOADING
    };
};