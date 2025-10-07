import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name : "feed",
    initialState : null,
    reducers : {
        addfeed : (state , action) => {
            return action.payload
        },
        removefeed : (state , action) => {
            return null
        } 
    }
})


export default feedSlice.reducer
export const {addfeed , removefeed} = feedSlice.actions