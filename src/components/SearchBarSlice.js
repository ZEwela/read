import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const setSearch = createAsyncThunk(
    'search/setSearch',
    async(userInput) => {
        return userInput;
    }
)
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        isLoading: false,
        hasError: false
    },
    reducers: {
        clearSearch: (state) => {
            state.searchTerm = ''
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(setSearch.pending, (state) => {
                state.isLoading = true;
                state.hasError = false
            }) 
            .addCase(setSearch.fulfilled, (state, action) => {
                state.searchTerm = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(setSearch.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true
            })
    }
})

export default searchSlice.reducer;
export const selectSearchTerm = (state) => state.search.searchTerm;
export const {clearSearch} = searchSlice.actions;
