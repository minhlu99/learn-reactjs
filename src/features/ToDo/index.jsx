import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/ToDoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Play',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoList = (prop, idx) => {

    const newTodoList = [...todoList];

    console.log(prop, idx);

    newTodoList[idx] = {
        ...newTodoList[idx],
        status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    
    setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>To Do List</h3>
            <Todolist props = {todoList} onTodoClick = {handleTodoList} />
        </div>
    );
}

export default TodoFeature;