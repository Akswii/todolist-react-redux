import React from "react";
import { connect } from "react-redux";

import TodoItem from "../todoItem";
import AddTodo from "../addTodo";

const mapStateToProps = state => state;

const TodoList = (state) => {
    const allTodos = state.todos;

    return (
        <>
            <ul className="list-group">
                {
                    allTodos.map((todo, index) =>
                        <TodoItem
                            key={index}
                            id={todo.id}
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
