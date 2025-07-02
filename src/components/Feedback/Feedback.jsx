import { useContext } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

import { FeedbackContext } from "../../context/Feedback/FeedbackContext";

import { StyledFeedback } from "./StyledFeedback";

export const Feedback = () => {
  const { total } = useContext(FeedbackContext);

  return (
    <StyledFeedback>
      <Section>
        <FeedbackOptions/>
        {total > 0 ? (
          <Statistics/>
        ) : (
          <Notification/>
        )}
      </Section>
    </StyledFeedback>
  );
};
