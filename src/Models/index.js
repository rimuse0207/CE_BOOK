import { combineReducers } from 'redux';
import NaviSelectCheck from './NaviSelectRedux/NaviSelectRedux';
import SearchSelectCheck from './SearchSelectRedux/SearchSelectRedux';
import LoginCheck from './LoginCheckRedux/LoginCheckRedux';
const rootReducer = combineReducers({
    NaviSelectCheck,
    SearchSelectCheck,
    LoginCheck,
});

export default rootReducer;
