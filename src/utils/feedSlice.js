import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name : "feed",
    initialState : null,
    reducers : {
        addfeed : (state , action) => {
            return action.payload
        },
        removeUserFromFeed : (state , action) => {
            const feed = state.filter((user) => user._id !== action.payload)
            return feed
        } 
    }
})


export default feedSlice.reducer
export const {addfeed , removeUserFromFeed} = feedSlice.actions