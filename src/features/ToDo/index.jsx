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

    const [filteredStatus, setFilterStatus] = useState('all')

    const handleShowAllClick = () => {setFilterStatus('all')};
    const handleShowCompletedClick = () => {setFilterStatus('completed')};
    const handleShowNewClick = () => {setFilterStatus('new')};

    const renderTodoList = todoList.filter(prop => filteredStatus === 'all' || filteredStatus === prop.status)

    return (
        <div>
            <h3>To Do List</h3>
            <Todolist props = {renderTodoList} onTodoClick = {handleTodoList} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>;
                <button onClick={handleShowCompletedClick}>Show Completed</button>;
                <button onClick={handleShowNewClick}>Show New</button>;
            </div>
        </div>
    );
}

export default TodoFeature;