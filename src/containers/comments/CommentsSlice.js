 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import { API_ROOT } from "../../app/redditAPI";

export const getComments = createAsyncThunk(
    'comments/getComments',
    async(permalink) => {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        const json = await response.json();
    
        const commentsList = json[1].data.children.map((comment) => comment.data);
    
        const commentsListDataSelected = commentsList.map(comment => {
          const {author, body, id, parent_id} = comment;
          const data = {author, body, id, parent_id};
          return data
        });

        return commentsListDataSelected
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {
            commentsByPostID: {}
        },
        isLoadingComments: false, 
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.isLoadingComments = true;
                state.hasError = false
            })
            .addCase(getComments.fulfilled, (state, action) => {
                const parentID = action.payload[0].parent_id;
                state.comments.commentsByPostID[parentID] = action.payload;
                state.isLoadingComments = false;
                state.hasError = false
            })
            .addCase(getComments.rejected, (state) => {
                state.hasError = true; 
                state.isLoadingComments = false
            })
    }
})

export const selectAllComments = (state) => state.comments.comments.commentsByPostID;
export const isLoadingComments = (state) => state.comments.isLoadingComments;

export default commentsSlice.reducer;
