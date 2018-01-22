import { combineReducers } from 'redux';
import events, * as fromEvents from './events';
import isFetching, * as fromIsFetching from './isFetching';


export default combineReducers({
    events,
    isFetching
});


export const getEvents = (state) => {
    return fromEvents.getState(state.events).array;
}
export const getIsFetching = (state) => {
    return fromIsFetching.getState(state.isFetching);
}




