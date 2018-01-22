import React from 'react';
import PropTypes from 'prop-types';

import './Sort.css';

class Sort extends React.Component {
    handleClick(){
        if(this.props.current){
            let val = (this.props.current === 'asc') ? 'desc' : 'asc';
            this.props.handleClick(val);
        }else{
            this.props.handleClick('asc');
        }
    }
    render(){
        let { current, extClass } = this.props;

        let classOfCont = "sort-button";
        if(extClass) classOfCont = classOfCont+' '+extClass;
        let classOfCaret = "sort-button__caret";
        if(current){
            classOfCont += ` sort-button_active`;
            classOfCaret += ` sort-button__caret_${current}`;
        }

        return  <div onClick={this.handleClick.bind(this)} className={classOfCont}>
                    <span className="sort-button__text">{this.props.children}</span>
                    {current && 
                    <span className={classOfCaret}></span>}
                </div>
    }
}

Sort.propTypes = {
    current: PropTypes.oneOf([false, 'asc', 'desc']),
    handleClick: PropTypes.func,
    extClass: PropTypes.string
}

export default Sort;