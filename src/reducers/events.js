import type from '../actions/type';

const events = (
    state = {
        table:{},
        array:[]
    }, 
    action) => {
    switch(action.type){
        case type.FETCH_EVENTS_SUCCESS:
            return addEvents(state, action) || state;
        case type.FAVORITES_TOGGLE:
            return toggleEvent(state, action.eventID) || state;
        default:
            return state;
    }
};

export default events;


export const getState = (state) => state;

const addEvents = (state, action) => {
    let events = action.response.entities.events;
    let favorites = action.favorites;
    if(!events) return;
    let newState = {...state};
    newState.table = {
        ...newState.table,
        ...events
    }
    if(favorites && favorites.length){
        favorites.forEach(id => {
            if(newState.table[id]) newState.table[id].favorite = true;
        })
    }
    newState.array = [];
    for(let key in newState.table){
        newState.array.push(newState.table[key]);
    }
    return newState;
}

const toggleEvent = (state, eventID) => {
    if(!eventID) return;
    let newState = {...state};
    newState.table = {...newState.table};
    if(newState.table[eventID]){
        let favorite = newState.table[eventID].favorite;
        newState.table[eventID].favorite = favorite ? false : true;
    }
    newState.array = [];
    for(let key in newState.table){
        newState.array.push(newState.table[key]);
    }
    return newState;
}