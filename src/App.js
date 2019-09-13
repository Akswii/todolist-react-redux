import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Custom components
import TodoList from "./components/todo_component/";

function App() {
    return (
        <>
            <main>
                <div className="container mt-3">
                    <TodoList />
                </div>
            </main>
        </>
    );
}

export default App;
