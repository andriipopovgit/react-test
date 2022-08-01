import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { About } from './About';

import { Home } from './Home';
import { NotFound } from './NotFound';
import { ToDos } from './ToDos';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/todos">ToDo's</Link>
                    <Link to="/about">About</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/todos' element={<ToDos />} />
                    <Route path='/about' element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
