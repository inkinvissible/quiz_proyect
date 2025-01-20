import {createSlice} from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [],
        currentQuestion: 0,
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        nextQuestion: (state, action) => {
            const increment = typeof action.payload === 'number' ? action.payload : 1
            state.currentQuestion += increment
        },
    }
})

export const {setQuestions, nextQuestion} = questionSlice.actions;
export default questionSlice.reducer;