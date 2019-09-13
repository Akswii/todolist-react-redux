import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Custom components
import TodoList from "./components/todo_component/";
import About from "./components/about";

function App() {
    return (
        <Router>
            <main>
                <div className="container mt-3">
                    <nav className="myHeader">
                        <h3>
                            My header
                        </h3>
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
                    <Route path="/" exact component={TodoList} />
                    <Route path="/about" exact component={About} />
                </div>
            </main>
        </Router>
    );
}

export default App;
