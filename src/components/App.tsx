import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { About } from './About';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { NotFound } from './NotFound';
import { ToDos } from './ToDos';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
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
