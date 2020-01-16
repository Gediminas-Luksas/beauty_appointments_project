import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import timesReducer from './timesReducer';

export default combineReducers({
    dates: datesReducer,
    times: timesReducer
});