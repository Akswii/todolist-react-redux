import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const mapStateToProps = store => store;

const TodoList = (store) => {
    const allTodos = store.todos;

    return (
        <>
            <ul className="list-group">
                {
                    allTodos.map((todo, index) =>
                        <TodoItem
                            key={index}
                            id={index}
                            onClick={todo.onClick}
                            text={todo.text}
                            completed={todo.completed}
                        />
                    )
                }
            </ul>
            <AddTodo />
        </>
    );
};

export default connect(mapStateToProps)(TodoList);
