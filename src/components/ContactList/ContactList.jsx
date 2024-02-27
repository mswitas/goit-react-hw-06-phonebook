import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    return (
        <ul>
            {contacts.map(filteredContact => {
                return (
                    <Contact key={filteredContact.id} id={filteredContact.id} name={filteredContact.name} number={filteredContact.number} />
                );
            })}
        </ul>
    );
};

