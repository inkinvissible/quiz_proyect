import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import './index.css'
import App from './App.jsx'
import questionsReducer, {setQuestions} from "./reducers/questionsReducer.js";
import questionsService from "./services/questionsService.js";
import pointsReducer from "./reducers/pointsReducer.js";


const store = configureStore({
    reducer: {
        questions: questionsReducer,
        points: pointsReducer,
    }
})

questionsService.getQuestions()
    .then(data => {
        console.log('Data fetched', data)
        store.dispatch(setQuestions(data))
        console.log(store.getState())
    })
    .catch(e => console.log(e))

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App/>
        </StrictMode>
    </Provider>
)
