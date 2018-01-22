import type from './type';
import {normalize} from 'normalizr';
import * as schema from './schema';
import * as fromReducers from '../reducers';
import * as messageService from '../services/messageService';


export const fetchEvents = () => (dispatch, getState) => {
  if( fromReducers.getIsFetching(getState()) ){
    return Promise.resolve();
  };
  
  dispatch({
    type: type.FETCH_EVENTS_REQUEST
  });

  let favorites = getFavorites();
  
  return messageService
  .getEvents()
  .then(
    response => {  
      // console.log( normalize(response, schema.arrayOfEvents) );
          dispatch({
            type: type.FETCH_EVENTS_SUCCESS,
            response: normalize(response, schema.arrayOfEvents),
            favorites: favorites
          })
    },
    error => { 
      dispatch({
        type: type.FETCH_EVENTS_FAILURE,
        message: error.message || 'Something went wrong!'
      })
    });
};



export const getFavorites = () => {
  try{
    let favorites = localStorage.getItem("favorites");
    if(!favorites){
      return false;
    }else{
      favorites = JSON.parse(favorites);
      if(!favorites || !favorites.length) return false;;
    }
    return favorites;
  }catch(e){
    console.log(e);
  }
}



export const toggleFavorites = (eventID) =>{
  try{
    let favorites = localStorage.getItem("favorites");
    if(!favorites){
      favorites = [];
    }else{
      favorites = JSON.parse(favorites);
      if(!favorites || !favorites.length) favorites = [];
    }
    
    let index = favorites.indexOf(eventID);
    if(index !== -1){
      favorites.splice(index, 1);
    }else{
      favorites.push(eventID);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }catch(e){
    console.log(e);
  }
  return {
    type: type.FAVORITES_TOGGLE,
    eventID: eventID
  }
}

