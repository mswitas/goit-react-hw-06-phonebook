import PropTypes from "prop-types";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number}) => (
    <li className={css.item}>{name}: {number} <button type="button" id={id}>Delete</button></li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
