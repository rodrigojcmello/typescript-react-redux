import { combineReducers } from 'redux';
import contador from './contador/reducers';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';

export interface IAppState {
    count?: number;
}

export default combineReducers({
    // todos,
    // visibilityFilter,
    contador,
});
