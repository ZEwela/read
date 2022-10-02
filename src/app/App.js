import React from 'react';
import '../../src/App.css';
import MainBody from '../components/MainBody';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Nav/>  
            <MainBody/>
        </Router>
    )
}

export default App;