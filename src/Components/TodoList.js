import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = ({ listItems }) => {
    const mockData = [
        {
            content: "My title",
            completed: false
        },
    ]

    return (
        <>
            <ul className="list-group">
                {listItems
                    ? listItems.map((listItem, index) => <TodoItem key={index} content={listItem.content} />)
                    : mockData.map((mockDataItem, index) => <TodoItem key={index} content={mockDataItem.content} />)
                }
            </ul>
            <AddTodo />
        </>
    );
};

export default TodoList;
