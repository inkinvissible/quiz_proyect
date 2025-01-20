import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addPoints} from "../reducers/pointsReducer.js";
import {nextQuestion} from "../reducers/questionsReducer.js";

const Question = ({question}) => {

    const dispatch = useDispatch();
    const correctAnswer = Object.entries(question.correct_answers).filter(a => a[1] === "true")[0][0]
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)


    const handleClick = (key) => {
        setSelectedAnswer(key)
        if (correctAnswer.includes(key)) {
            setIsCorrect(true)
            dispatch(addPoints(1))
            console.log("Added point. Correct")
        } else {
            setIsCorrect(false)
            console.log("No point added. Incorrect")
        }
        setTimeout(() => {
            setIsCorrect(null)
            setSelectedAnswer(null)
            dispatch(nextQuestion())
        }, 5000)

    }

    return (

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 max-w-full">

            <div className="flex flex-wrap gap-2 mb-4">

                <span
                    className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    {question.category}
                </span>
                <span
                    className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                    {question.difficulty}
                </span>
            </div>

            <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {question.question}
            </h5>

            <p className="mb-4 text-gray-700 dark:text-gray-400">
                {question.description} The options are:
            </p>

            <div className="space-y-3">
                {Object.entries(question.answers).map(([key, value]) => (
                    value && (
                        <button
                            type="button"
                            key={key}
                            onClick={() => handleClick(key)}
                            className={`
                                w-full flex items-center justify-center px-4 py-2 rounded-lg border text-sm font-medium 
                                transition-colors duration-200 
                                ${selectedAnswer === key
                                ? isCorrect
                                    ? "bg-green-500 hover:bg-green-600 focus:ring-green-300"
                                    : "bg-red-500 hover:bg-red-600 focus:ring-red-300"
                                : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
                            }
                                text-white focus:outline-none focus:ring-4
                            `}
                        >
                            {value}
                        </button>
                    )
                ))}
            </div>
            {selectedAnswer && (

                <div className="mt-2">
                    <p className="text-sm text-gray-200">The correct answer is:</p>

                    <p className="text-xl font-bold text-gray-900 dark:text-white">  {question.answers[correctAnswer.slice(0, 8)]}</p>
                </div>


            )}
        </div>


    )
}
Question.propTypes = {
    question: PropTypes.shape({
        category: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        description: PropTypes.string,
        answers: PropTypes.objectOf(PropTypes.string).isRequired,
        difficulty: PropTypes.string.isRequired,
        correct_answers: PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
}


export default Question;