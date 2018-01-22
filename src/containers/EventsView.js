import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import * as actions from '../actions';
import * as reducers from '../reducers';
import Header from '../components/Header/Header';
import EventsList from '../components/EventsList/EventsList';


class EventsView extends React.Component{

  componentDidMount(){
    if(!this.props.events.length){
      this.props.fetchEvents();
    }
  };

  goToType(filter){
    const { location, history } = this.props;
    let getParams = queryString.parse(location.search);
    if(filter === 'all'){
      delete getParams.type;
    }else{
      getParams.type = filter;
    }
    history.push( '?' + queryString.stringify(getParams) );
  }

  goToSortByPrice(value){
    const { location, history } = this.props;
    let getParams = queryString.parse(location.search);
    if(value === 'no' || !value){
      delete getParams.sortprice;
    }else{
      getParams.sortprice = value;
    }
    history.push( '?' + queryString.stringify(getParams) );
  }
  

  render() {
    const { location, match, events, isFetching, toggleFavorites } = this.props;
    const getParams = queryString.parse(location.search);
    
    if (isFetching && !events.length) {
      return <div>Loading...</div>;
    }
    return <div>
              <Header events={events}
                      getParams={getParams}
                      goToType={this.goToType.bind(this)}
                      goToSortByPrice={this.goToSortByPrice.bind(this)} />
              <EventsList events={events}
                          getParams={getParams}
                          toggleFavorites={toggleFavorites}
                          params={match.params} />
            </div>
            
  }
}

const mapStateToProps = (state) => {
  return {
    events: reducers.getEvents(state),
    isFetching: reducers.getIsFetching(state)
  };
}

EventsView = connect(
  mapStateToProps,
  actions
)(EventsView)

export default EventsView
