import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ROOT } from "../../app/redditAPI";

export const loadAllCategories =  createAsyncThunk(
    'categories/loadAllCategories', 
    async() => {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();
      
        const categoriesList = json.data.children.map((category) => category.data);
       
        const categoriesListDataSelected = categoriesList.map(category => {
          const {id, title, name, url, display_name} = category;
          const data = {id, title, name, url, display_name};
          return data
        });
        return categoriesListDataSelected
    }
);

const categoriesSlice = createSlice({
    name: 'categories', 
    initialState: {
        categories: [],
        isLoadingCategories: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllCategories.pending, (state) => {
                state.isLoadingCategories = true;
                state.hasError = false
            })
            .addCase(loadAllCategories.fulfilled, (state, action) => {
                state.isLoadingCategories = false;
                state.categories = action.payload
            })
            .addCase(loadAllCategories.rejected, (state) => {
                state.isLoadingCategories = false;
                state.hasError = true
            })
    }
})

export const selectAllCategories = (state) => state.categories.categories;
export const isLoadingCategories = (state) => state.categories.isLoadingCategories;

export default categoriesSlice.reducer;
