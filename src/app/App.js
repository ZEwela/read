import React from 'react';
import '../../src/App.css';
import {getCommentsForPost, getCategories, getPostsByCategory} from './redditAPI';
import MainBody from '../components/MainBody';
import Nav from '../components/Nav';


function App() {
    return (
        console.log("categories: ", getCategories()),
        console.log("posts: ", getPostsByCategory('Damnthatsinteresting')),
        console.log(getCommentsForPost('/r/Damnthatsinteresting/comments/xrpbr9/the_peel_p50_threewheeled_microcar_made_from_1962/')),
        <>
            <Nav/>
            <MainBody/>
        </>
    )
}

export default App;