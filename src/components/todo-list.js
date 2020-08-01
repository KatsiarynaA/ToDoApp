import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {

    const firstEl = (
        <li>
            <TodoListItem
                label={todos[0].label}
                important={todos[0].important}/>
        </li>
    );

    const secondEl = (
        <li>
            <TodoListItem
                label={todos[1].label}
                important={todos[1].important}/>
        </li>
    );

    const thirdEl = (
        <li>
            <TodoListItem
                label={todos[2].label}
                important={todos[2].important}/>
        </li>
    );

    return (
        <ul>
            {firstEl}
            {secondEl}
            {thirdEl}
        </ul>
    );
};

export default TodoList;
