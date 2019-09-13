import React from "react";

import { connect } from "react-redux";
import { toggleTodo } from "../../../redux/actions";

import DeleteTodo from "../deleteTodo";

const TodoItem = (props) => {
    const handleClick = () => {
        props.toggleTodo(props.id);
    };


    return (
        <li className="list-group-item d-flex align-items-center">
            <span className="flex-grow-1" onClick={handleClick} style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.text}</span>
            <DeleteTodo id={props.id} />
        </li>
    );
}

export default connect(null, { toggleTodo })(TodoItem);
