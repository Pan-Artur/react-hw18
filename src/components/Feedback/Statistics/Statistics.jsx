import { useContext } from "react";

import { FeedbackContext } from "../../../context/Feedback/FeedbackContext";

export const Statistics = () => {
    const { good, neutral, bad, total, positivePercentage } = useContext(FeedbackContext);

    return (
        <div className="feedback-result">
            <h2>Statistics</h2>
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive feedback: {positivePercentage}%</p>
                </li>
            </ul>
        </div>
    );
}