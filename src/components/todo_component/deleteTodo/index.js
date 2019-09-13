import React from "react";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";
import { deleteTodo } from "../../../redux/actions"

const DeleteTodo = (props) => {
    const handleDeleteTodo = () => {
        props.deleteTodo(props.id);
    }

    return (
        <Button variant="danger" size="sm" onClick={handleDeleteTodo}>
            Delete
        </Button>
    );
}

export default connect(null, { deleteTodo })(DeleteTodo);
