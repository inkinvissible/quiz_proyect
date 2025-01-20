import {useDispatch, useSelector} from "react-redux";
import Question from "./Question.jsx";
import {nextQuestion} from "../reducers/questionsReducer.js";
import Finished from "./Finished.jsx";

const Quiz = () => {
    const questions = useSelector(state => state.questions.questions)

    const currentQuestion = useSelector(state => state.questions.currentQuestion)
    const points = useSelector(state => state.points)

    const dispatch = useDispatch()

    if (currentQuestion >= questions.length) {
        return <Finished/>

    } else {
        return (
            <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-3xl">
                    <span className="text-gray-100 m-2 text-center">You have: {points} points</span>
                    <Question question={questions[currentQuestion]}/>
                    <button
                        type="button"
                        disabled={!questions.length || currentQuestion >= questions.length}
                        className="mt-6 w-full bg-purple-700 text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        onClick={() => dispatch(nextQuestion())}
                    >
                        Next
                    </button>
                </div>
            </div>

        )
    }
}
export default Quiz;