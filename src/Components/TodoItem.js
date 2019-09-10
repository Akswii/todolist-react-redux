import React from "react";

const TodoItem = ({ content, completed }) => (
    <li className="list-group-item">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" />
            <label class="custom-control-label" for="customCheck1">{content}</label>
        </div>
    </li>
);

export default TodoItem;
