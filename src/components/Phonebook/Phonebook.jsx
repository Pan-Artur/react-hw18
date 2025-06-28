import { useState, useEffect } from "react";

import { PhoneEditor } from "./PhoneEditor/PhoneEditor";
import { PhoneList } from "./PhoneList/PhoneList";

import { nanoid } from "nanoid";

import { StyledPhonebook } from "./StyledPhonebook";

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (field, value) => {
    if (field === "name") {
      setName(value);
    } else if (field === "number") {
      setNumber(value);
    }
  };

  const addContact = (name, number) => {
    if (!name || !number || name.trim() === "" || number.trim() === "") {
      return;
    }

    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} вже є в телефонній книзі!`);
      return;
    }

    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(5), name, number },
    ]);

    setName("");
    setNumber("");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      try {
        const parsedContacts = JSON.parse(savedContacts);

        if (Array.isArray(parsedContacts) && parsedContacts.length > 0) {
          setContacts(parsedContacts);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledPhonebook>
      <h1>Phonebook</h1>
      <div>
        <PhoneEditor
          onAddContact={addContact}
          onChange={handleInputChange}
          name={name}
          number={number}
        />
        <PhoneList
          contacts={filteredContacts}
          value={filter}
          onChange={handleFilterChange}
          onDelete={deleteContact}
        />
      </div>
    </StyledPhonebook>
  );
};