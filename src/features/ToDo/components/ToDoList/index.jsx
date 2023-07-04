import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

Todolist.propTypes = {
    todoList: PropTypes.array,
};

Todolist.defaultProps = {
    todoList: []
}

function Todolist({props}) {  
    return (
        <ul>
            {props.map(prop => (<li key = {prop.id}>{prop.title}</li>))}
        </ul>
    );
}

export default Todolist;