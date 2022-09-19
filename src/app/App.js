import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';
import Categories from '../containers/categories/Categories';
import Cards from '../containers/cards/Cards';
import Nav from '../components/Nav';


function App() {
    return (
        <>
            <Nav/>
            <Categories/>
            <Cards />
        </>
    )
    // getCommentsForPost('/r/funny/comments/xfvnqv/someone_is_getting_fired/')
}

export default App;
