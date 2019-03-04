import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form'
import authReducers from "./authReducer";
import survayReducer from "./survayReducer"
export default combineReducers({
    auth : authReducers,
    form: reduxForm,
    surveys: survayReducer
});