export const FeedbackOptions = ({
  onLeaveGood,
  onLeaveNeutral,
  onLeaveBad,
}) => {
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
