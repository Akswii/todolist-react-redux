import React from "react";

import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TodoItem = (props) => {
    const handleClick = () => {
        props.toggleTodo(props.id);
    };


    return (
        <li className="list-group-item" onClick={handleClick}>
            <span style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.text}</span>
        </li>
    );
}

export default connect(null, { toggleTodo })(TodoItem);
