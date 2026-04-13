import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async (limit = 5, thunkAPI) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return await response.json();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
});

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.posts = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export const { clearPosts } = postSlice.actions;

export default postSlice.reducer;