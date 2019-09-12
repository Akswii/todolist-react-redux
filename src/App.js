import React from 'react';
import './App.css';
import TodoList from "./components/todoList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <header className="App-header">
                <h1>My Todolist!</h1>
            </header>
            <main>
                <div className="container mt-3">
                    <TodoList />
                </div>
            </main>
        </>
    );
}

export default App;
