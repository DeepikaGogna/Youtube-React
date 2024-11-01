import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
    },
    reducers:{
        cacheResults:(state, action) => {
            const newCache = {...state, ...action.payload}
            if (Object.keys(newCache).length > 100) {
                const [firstKey] = Object.keys(newCache);  // Get the first key (oldest record)
                delete newCache[firstKey];  // Delete the oldest record
            }
            state = newCache
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;