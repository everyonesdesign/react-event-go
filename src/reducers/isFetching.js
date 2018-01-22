import type from '../actions/type';

const isFetching = (state = false, action) => {
    switch(action.type){
        case type.FETCH_EVENTS_REQUEST:
            return true;
        case type.FETCH_EVENTS_FAILURE:
        case type.FETCH_EVENTS_SUCCESS:
            return false;
        default:
            return state;
    }
};

export default isFetching;


export const getState = (state) => state;