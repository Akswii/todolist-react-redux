import React from "react";

const AddTodo = () => (
    <div className="input-group mt-3">
        <input type="text" className="form-control" aria-label="Todo item text" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add item</button>
        </div>
    </div>
);

export default AddTodo;
