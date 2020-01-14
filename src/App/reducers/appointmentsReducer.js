import { 
    FETCH_APPOITMENTS_DATE,
    FETCH_APPOITMENTS_TIME,
    ADD_APPOITMENT, 
    GET_APPOITMENTS_DATE_BY_ID,
    ADD_APPOITMENT_TIME,
    UPDATE_APPOITMENTS_TIME_BY_ID,
    DELETE_APPOITMENT_DATE, 
    DELETE_APPOITMENT_TIME,
    APPOITMENTS_LOADING 
} from '../actions/types';

const appointments = {
    appointments: [],
    appointmentsTimes: [],
    loading: false,
    add_appointment_id: ''
};

export default (state = appointments , action) => {
    switch (action.type){
        case FETCH_APPOITMENTS_DATE:
            return {
                ...state,
                appointments: action.payload
            };
        case FETCH_APPOITMENTS_TIME:
            return {
                ...state,
                appointmentsTimes: action.payload,
                loading: false
            };
        case ADD_APPOITMENT:
            return {
                ...state,
                appointments: [action.payload, ...state.appointments]
            };
        case GET_APPOITMENTS_DATE_BY_ID:
            return {
                ...state,
                add_appointment_id: action.payload
            };
        case ADD_APPOITMENT_TIME:
            return {
                ...state,
                appointmentsTimes: [action.payload, ...state.appointmentsTimes]
            };
        case UPDATE_APPOITMENTS_TIME_BY_ID:
            return {
                ...state,
                appointmentsTimes: [action.payload, ...state.appointmentsTimes]
            };
        case DELETE_APPOITMENT_DATE:
            return {
                ...state,
                appointments: state.appointments.filter(appo => appo.id !== action.payload)
            };
        case DELETE_APPOITMENT_TIME:
            return {
                ...state,
                appointmentsTimes: state.appointmentsTimes.filter(appo => appo.id !== action.payload)
            };
        case APPOITMENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};