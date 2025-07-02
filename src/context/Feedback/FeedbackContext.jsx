import { createContext, useState } from "react";

export const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  const title = "Please leave feedback";
  const message = "There is no feedback";

  const onLeaveGood = () => setGood((prevState) => prevState + 1);
  const onLeaveNeutral = () => setNeutral((prevState) => prevState + 1);
  const onLeaveBad = () => setBad((prevState) => prevState + 1);

  return (
    <FeedbackContext.Provider
      value={{
        title,
        onLeaveGood,
        onLeaveNeutral,
        onLeaveBad,
        good,
        neutral,
        bad,
        total,
        positivePercentage,
        message,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
