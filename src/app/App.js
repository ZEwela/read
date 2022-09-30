import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';
import MainBody from '../components/MainBody';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        // console.log("categories: ", getCategories()),
        // console.log("posts: ", getPostsByCategory('Damnthatsinteresting')),
        console.log(getCommentsForPost('/r/Damnthatsinteresting/comments/xrpbr9/the_peel_p50_threewheeled_microcar_made_from_1962/')),
        <Router>
            <Nav/>  
            <MainBody/>
        </Router>
    )
}

export default App;