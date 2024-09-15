// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes> {/* Use 'Routes' instead of 'Switch' */}
                <Route path="/login" element={<Login setToken={setToken} />} /> {/* Use 'element' instead of 'component' */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={token ? <Home token={token} /> : <Login setToken={setToken} />} />
                
            </Routes>
        </Router>
    );
}

export default App;
