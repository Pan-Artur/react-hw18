import { useContext } from "react";

import { FeedbackContext } from "../../../context/Feedback/FeedbackContext";

export const FeedbackOptions = () => {
  const { onLeaveGood, onLeaveNeutral, onLeaveBad } = useContext(FeedbackContext);

  return (
    <ul className="feedback-managment">
      <li key="good-option">
        <button type="button" onClick={() => onLeaveGood()}>
          Good
        </button>
      </li>
      <li key="neutral-option">
        <button type="button" onClick={() => onLeaveNeutral()}>
          Neutral
        </button>
      </li>
      <li key="bad-option">
        <button type="button" onClick={() => onLeaveBad()}>
          Bad
        </button>
      </li>
    </ul>
  );
};
