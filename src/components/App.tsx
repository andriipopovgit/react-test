import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { Home } from './Home';
import { ToDos } from './ToDos';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/todos">ToDo's</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/todos' element={<ToDos />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
