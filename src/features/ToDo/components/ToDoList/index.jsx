import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classnames from 'classnames';

Todolist.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
    todoList: []
}

function Todolist({props, onTodoClick}) {  

    const handleTodoList = (prop, idx) => {
        if (!onTodoClick) return;

        onTodoClick(prop, idx)
    }

    return (
        <ul className='todolist'>
            {props.map((prop, idx) => (
                <li 
                key = {prop.id} 
                className={classnames({
                    'todo-item': true,
                    completed: prop.status === 'completed'})}
                    onClick={() => handleTodoList(prop, idx)}
                >
                {prop.title}
                </li>
            ))}
        </ul>
    );
}

export default Todolist;