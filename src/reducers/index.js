import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import user from './user';
import userHistory from './user-history';

export default combineReducers({
    todos,
    visibilityFilter,
    user,
    userHistory
});
