import { createContext, useState, useRef, useEffect } from "react";

export const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalRef = useRef(0);
  const positivePercentageRef = useRef(0);

  useEffect(() => {
    totalRef.current = good + neutral + bad;
    positivePercentageRef.current = totalRef.current
      ? Math.round((good / totalRef.current) * 100)
      : 0;
  }, [good, neutral, bad]);

  const title = "Please leave feedback";
  const message = "There is no feedback";

  const onLeaveGood = (() => setGood((prevState) => prevState + 1));
  const onLeaveNeutral = (() => setNeutral((prevState) => prevState + 1));
  const onLeaveBad = (() => setBad((prevState) => prevState + 1));

  const total = totalRef.current;
  const positivePercentage = positivePercentageRef.current;

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
