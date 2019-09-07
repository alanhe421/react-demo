import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import user from './user';
import userHistory from './user-history';
import books from './books';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todos,
    visibilityFilter,
    user,
    userHistory,
    books
});
export default createRootReducer;
