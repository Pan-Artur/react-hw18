import { useEffect, useRef, useState } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

import { StyledFeedback } from "./StyledFeedback";

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalRef = useRef(0);
  const positivePercentageRef = useRef(0);

  useEffect(() => {
    totalRef.current = good + neutral + bad;
    positivePercentageRef.current = totalRef.current ? Math.round((good / totalRef.current) * 100) : 0;
  }, [good, neutral, bad]);

  return (
    <StyledFeedback>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveGood={() => setGood((prevState) => prevState + 1)}
          onLeaveNeutral={() => setNeutral((prevState) => prevState + 1)}
          onLeaveBad={() => setBad((prevState) => prevState + 1)}
        />
        {totalRef.current > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalRef.current}
            positivePercentage={positivePercentageRef.current}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledFeedback>
  );
};
