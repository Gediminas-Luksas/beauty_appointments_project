import {
	FETCH_APPOITMENTS_TIME,
	ADD_APPOITMENT_TIME,
	UPDATE_APPOITMENTS_TIME_BY_ID,
	DELETE_APPOITMENT_TIME,
	APPOITMENTS_LOADING,
} from '../actions/types';

const appointments = {
	times: [],
	loading: false,
};

export default (state = appointments, action) => {
	switch (action.type) {
		case FETCH_APPOITMENTS_TIME:
			return {
				...state,
				times: action.payload,
				loading: false,
			};
		case ADD_APPOITMENT_TIME:
			return {
				...state,
				times: [action.payload, ...state.times],
			};
		case UPDATE_APPOITMENTS_TIME_BY_ID:
			return {
				...state,
				times: [action.payload, ...state.times],
			};
		case DELETE_APPOITMENT_TIME:
			return {
				...state,
				times: state.times.filter((appo) => appo.id !== action.payload),
			};
		case APPOITMENTS_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
