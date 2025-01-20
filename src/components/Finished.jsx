import {useSelector} from "react-redux";
import React from "react";

const Finished = React.memo(() => {
    const points = useSelector(state => state.points)
    let title, description
    if (points <= 7) {
         title = "You lost"
         description = "Sorry, but you have not reached the required points to win the game."
    } else {
         title = "You won"
         description = "Congratulations, you have reached the required points to win the game."
    }
    return (
        <section className="flex justify-center items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}. You have {points} points and you have answer correctly {points} questions and incorrectly {10 - points} questions.</p>

            </div>
        </section>

    )

});
Finished.displayName = "Finished";

export default Finished