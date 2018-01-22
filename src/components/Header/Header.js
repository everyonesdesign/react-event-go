import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import Sort from '../Sort/Sort';
import './Header.css';

class Header extends React.Component{

    handleTypeChange(e){
        this.props.goToType(e.target.value);
    }
    handleSortByPrice(e){
        this.props.goToSortByPrice(e.target.value)
    }

    render(){
        let { events, getParams } = this.props;
        let opt =   _.uniqBy(events, 'type')
                    .map(item => item.type);
        opt.unshift('all');
        
        let filter = 'all';
        let sortByPrice = false;
        if(getParams){
            filter = getParams.type ? getParams.type : 'all';
            sortByPrice = getParams.sortprice ? getParams.sortprice : false;
        }
      
        return  <div className="header">
                    <div className="header__filters">
                        <select value={filter} 
                                className="form-control header__type"
                                onChange={this.handleTypeChange.bind(this)}>
                            {opt.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        <Sort current={sortByPrice}
                            handleClick={this.props.goToSortByPrice.bind(this)}
                            extClass="header__sort">
                            Сорт-ть по цене
                        </Sort>
                    </div>
                    <div className="header__menu">
                        <NavLink to="/" exact className="header__link">Главная</NavLink>
                        <NavLink to="/favorites" className="header__link">Избранное</NavLink>
                    </div>
                </div>
    }
}

    

Header.propTypes = {
    events: PropTypes.array,
    getParams: PropTypes.object,
    goToType: PropTypes.func,
    goToSortByPrice: PropTypes.func
};

export default Header;