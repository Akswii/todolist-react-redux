import React from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <header className="App-header">
                <h1>My Todolist!</h1>
            </header>
            <body>
                <div className="container mt-3">
                    <TodoList />
                </div>
            </body>
        </>
    );
}

export default App;
