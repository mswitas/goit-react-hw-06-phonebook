import css from "./App.module.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const form = e.currentTarget;
  //   const name = form.elements.name.value;
  //   const number = form.elements.number.value;
  //   const contact = { id: nanoid(), name: name, number: number };

  //   if (includesName(name)) {
  //     alert(`${name} is alreadry in contacts.`);
  //   } else {
  //     setContacts((prev) => [...prev, contact]);
  //     form.reset();
  //   }
  // }

  // const handleFilter = (e) => {
  //   const filterPhrase = e.currentTarget.value;
  //   setFilter(filterPhrase);
  // }
  
  // const includesName = (name) => {
  //   if (contacts.some(contact => contact.name === name)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
