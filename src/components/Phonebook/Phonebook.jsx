import { PhoneEditor } from "./PhoneEditor/PhoneEditor";
import { PhoneList } from "./PhoneList/PhoneList";

import { StyledPhonebook } from "./StyledPhonebook";

export const Phonebook = () => {
  return (
    <StyledPhonebook>
      <h1>Phonebook</h1>
      <div>
        <PhoneEditor/>
        <PhoneList/>
      </div>
    </StyledPhonebook>
  );
};