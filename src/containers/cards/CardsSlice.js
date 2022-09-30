
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ROOT } from '../../app/redditAPI';

export const getPosts = createAsyncThunk(
    'cards/getPosts',
    async (category) => {
        const response = await fetch(`${API_ROOT}/r/${category}.json`);
        const json = await response.json();
    
        const postsList = json.data.children.map((post) => post.data);
      
        const postsListDataSelected = postsList.map(post => {
          const {author, created_utc, name, id, permalink, subreddit, subreddit_id, title, score, link_flair_text, url, media} = post;
          const data = {author, created_utc, name, id, permalink, subreddit, subreddit_id, title, score, link_flair_text, url, media};
          return data
        });
        return postsListDataSelected
    }
);


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        isLoadingCards: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getPosts.pending, (state) => {
                state.isLoadingCards = true;
                state.hasError = false
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.cards = action.payload;
                state.isLoadingCards = false;
                state.hasError = false
            })
            .addCase(getPosts.rejected, (state) => {
                state.isLoadingCards = false;
                state.hasError = true
            })
    }
})


export default cardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
export const isLoading = (state) => state.cards.isLoadingCards;