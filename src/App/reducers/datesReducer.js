import {FETCH_APPOITMENTS_DATE, ADD_APPOITMENT, DELETE_APPOITMENT_DATE} from '../actions/types';

const appointments = {
	dates: [],
};

export default (state = appointments, action) => {
	switch (action.type) {
		case FETCH_APPOITMENTS_DATE:
			return {
				...state,
				dates: action.payload,
			};
		case ADD_APPOITMENT:
			return {
				...state,
				dates: [action.payload, ...state.dates],
			};
		case DELETE_APPOITMENT_DATE:
			return {
				...state,
				dates: state.dates.filter((appo) => appo.id !== action.payload),
			};
		default:
			return state;
	}
};
