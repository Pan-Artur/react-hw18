import { useContext } from "react";

import { FeedbackContext } from "../../../context/Feedback/FeedbackContext";

export const Notification = () => {
    const { message } = useContext(FeedbackContext);

    return (
        <p>{message}</p>
    );
}