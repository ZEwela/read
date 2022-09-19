import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import Categories from '../containers/categories/Categories';
import Cards from '../containers/cards/Cards';


function App() {
    return (
        <>
            <Header text="Read"/>
            <SearchBar />
            <Categories/>
            <Cards />
        </>
    )
    // getCommentsForPost('/r/funny/comments/xfvnqv/someone_is_getting_fired/')
}

export default App;
