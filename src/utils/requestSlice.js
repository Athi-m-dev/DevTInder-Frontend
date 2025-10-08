import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : "request",
    initialState : null,
    reducers : {
        addRequest : (state, action) => {
            return action.payload
        },
        removeRequest : (state , action) => {
            state = state.filter((res) => res.id !== action.payload)
            return state
        }
    }
})

export default requestSlice.reducer
export const {addRequest , removeRequest} = requestSlice.actions