import React from 'react';

import './EventItem.css';


const EventItem = (props) => {
  let buttonClassName = 'list-item__favorite';
  if(props.favorite) buttonClassName += ' list-item__favorite_added';
  
  return  <div className="list-item">     
              <div className="list-item__top">
                <div className="list-item__header">
                  <h3 className="list-item__title">{props.title}</h3>
                  <button className={buttonClassName}
                    onClick={() => {props.toggleFavorites(props.id)}}>+</button>
                </div>
                <div className="list-item__descr">{props.description}</div>
              </div>
              <div className="list-item__footer">
                <div className="list-item__price">{props.price+' руб.'}</div>
                <div className="list-item__type">{props.type}</div>
              </div>
          </div>
};



export default EventItem