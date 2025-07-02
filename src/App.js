import { FeedbackProvider } from "./context/Feedback/FeedbackContext";
import { PhonebookProvider } from "./context/Phonebook/PhonebookContext";

import { Feedback } from "./components/Feedback/Feedback";
import { Phonebook } from "./components/Phonebook/Phonebook";

import "./App.css";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Feedback />
      </FeedbackProvider>
      <PhonebookProvider>
        <Phonebook />
      </PhonebookProvider>
    </>
  );
}

export default App;
