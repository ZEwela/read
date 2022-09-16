import React from 'react';
import '../../src/App.css';
import {getCommentsForPost} from './redditAPI';

function App() {
    return getCommentsForPost('/r/funny/comments/xfvnqv/someone_is_getting_fired/')
}

export default App;
