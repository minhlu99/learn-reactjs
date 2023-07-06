import React from 'react';
import PropTypes from 'prop-types';
import Items from './components';

CourseList.propTypes = {
    
};

function CourseList({props}) {

    return (
        <div>

            {props.map(prop => (
                <div key = {prop.id}>
                    <Items props = {prop}/>
                </div>
            ))}
            
        </div>
    );
}

export default CourseList;