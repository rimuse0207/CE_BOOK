import { combineReducers } from 'redux';
import NaviSelectCheck from './NaviSelectRedux/NaviSelectRedux';
import SearchSelectCheck from './SearchSelectRedux/SearchSelectRedux';
const rootReducer = combineReducers({
    NaviSelectCheck,
    SearchSelectCheck,
});

export default rootReducer;
