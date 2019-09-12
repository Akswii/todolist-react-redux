import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

const AddTodo = (props) => {
    const [input, setInput] = useState("");

    const updateInput = (val) => setInput(val);

    const handleAddTodo = () => {
        props.addTodo(input);
    }

    return (
        <div className="input-group mt-3">
            <input
                type="text"
                className="form-control"
                aria-label="Todo item text"
                aria-describedby="button-addon2"
                onChange={e => updateInput(e.target.value)}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={handleAddTodo}
                >
                    Add item
                </button>
            </div>
        </div>
    );
};

export default connect(null, { addTodo })(AddTodo);
