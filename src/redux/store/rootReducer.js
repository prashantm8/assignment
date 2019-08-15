import { combineReducers } from 'redux';
import feebackState  from '../feedback/reducer'

const appReducer = combineReducers({
	feebackState
});

const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer
