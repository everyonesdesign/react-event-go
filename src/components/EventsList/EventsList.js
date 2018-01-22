import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import EventItem from '../EventItem/EventItem';

import './EventsList.css';


const EventsList = ({events, getParams, params, toggleFavorites}) => {
    let eventsFiltered = [...events];
    if(params && params.favorites){
        eventsFiltered = eventsFiltered.filter(item => item.favorite);
    }
    if(getParams){
        if(getParams.type && getParams.type !== 'all'){
            eventsFiltered = eventsFiltered.filter(item => item.type === getParams.type);
        }
        if(getParams.sortprice){
            eventsFiltered = orderBy(eventsFiltered, 'price', getParams.sortprice);
        }
    }

    return  <div className="events-list">
                {eventsFiltered.map(ev => ( 
                    <EventItem key={ev.id} 
                                toggleFavorites={toggleFavorites} 
                                {...ev} />
                ))}
            </div>
}



EventsList.propTypes = {
    events: PropTypes.array,
    getParams: PropTypes.object,
    toggleFavorites: PropTypes.func,
    params:PropTypes.object
};

export default EventsList