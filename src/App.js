import React from 'react';
import './styling/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Custom components
import TodoList from "./components/todo_component/";
import About from "./components/about";

function App() {
    return (
        <Router>
            <div className="mt-3">
                <nav className="myHeader container">
                    <h2>My Application</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/placeholder/">Placeholder</Link>
                        </li>
                    </ul>
                </nav>
                <main className="container">
                    <Route path="/" exact component={TodoList} />
                    <Route path="/about" exact component={About} />
                </main>
            </div>
        </Router>
    );
}

export default App;
