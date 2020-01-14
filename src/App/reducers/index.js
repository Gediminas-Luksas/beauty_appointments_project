import { combineReducers } from 'redux';
import appointmentsReducer from './appointmentsReducer';

export default combineReducers({
    appointments: appointmentsReducer
});