import {createSlice} from "@reduxjs/toolkit";

const pointsSlice = createSlice({
    name: 'points',
    initialState: 0,
    reducers: {
        addPoints: (state, action) => {
            const increment = typeof action.payload === 'number' ? action.payload : 1
            return state + increment
        },

    }
})

export const {addPoints} = pointsSlice.actions;
export default pointsSlice.reducer;