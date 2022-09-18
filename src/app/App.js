import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';
import Header from '../components/Header';


function App() {
    return (
        <Header text="Read"/>
    )
    // getCommentsForPost('/r/funny/comments/xfvnqv/someone_is_getting_fired/')
}

export default App;
