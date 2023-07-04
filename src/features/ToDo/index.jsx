import React from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/ToDoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'Play'
        },
    ]
    return (
        <div>
            <h3>To Do List</h3>
            <Todolist props = {todoList} />
        </div>
    );
}

export default TodoFeature;