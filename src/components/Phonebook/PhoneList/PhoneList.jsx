import { useEffect, useRef, useContext } from "react";

import { PhonebookContext } from "../../../context/Phonebook/PhonebookContext";

import { FaPhoneAlt } from "react-icons/fa";

import { StyledPhoneList } from "./StyledPhoneList";

export const PhoneList = () => {
  const { filteredContacts, value, deleteContact, handleFilterChange } = useContext(PhonebookContext);

  const prevContactsRef = useRef();

  useEffect(() => {
    if (prevContactsRef.current !== filteredContacts) {
      localStorage.setItem("contacts", JSON.stringify(filteredContacts));
    }

    prevContactsRef.current = filteredContacts;
  }, [filteredContacts]);

  const hasContacts = filteredContacts.length > 0;

  return (
    <StyledPhoneList>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleFilterChange}
        />
      </div>

      {!hasContacts && <p>No contacts yet...</p>}

      {hasContacts && (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <FaPhoneAlt />
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledPhoneList>
  );
};