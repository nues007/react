import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getAuthors } from "../../api/authorApi";

function Select(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += "has-error";
  }
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        >
          <option value="" />
          {authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}
Select.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  error: "",
};

export default Select;
