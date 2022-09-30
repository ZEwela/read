import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';
import MainBody from '../components/MainBody';
import Nav from '../components/Nav';


function App() {
    return (
        <>
            <Nav/>
            <MainBody/>
        </>
    )
    // getCommentsForPost('/r/funny/comments/xfvnqv/someone_is_getting_fired/')
}

export default App;