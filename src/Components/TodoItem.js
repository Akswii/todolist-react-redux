import React, { useState } from "react";

import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TodoItem = (props) => {
    const handleClick = () => {
        props.toggleTodo(props.id);
    };

    return (
        <li className="list-group-item" onClick={handleClick}>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={`todo-check-${props.id}`} />
                <label className="custom-control-label" htmlFor={`todo-check-${props.id}`}>{props.text}</label>
            </div>
        </li>
    );
}
export default connect(null, { toggleTodo })(TodoItem);
