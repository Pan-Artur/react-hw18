import { useContext } from "react";

import { FeedbackContext } from "../../../context/Feedback/FeedbackContext";

export const Section = ({ children }) => {
  const { title } = useContext(FeedbackContext);

  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};
