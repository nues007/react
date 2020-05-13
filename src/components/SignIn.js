import React from "react";
import Textinput from "./common/TextInput";
import { Link } from "react-router-dom";

function SignIn(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Textinput
        id="farmer"
        label="Farmer"
        onChange={props.onChange}
        name="farmer"
        className="form-control"
        value={props.user.farmer}
        error={props.errors.farmer}
      />
      <Textinput
        id="number"
        label="Number"
        name="number"
        className="form-control"
        onChange={props.onChange}
        value={props.user.number}
        error={props.errors.number}
      />

      <Textinput
        id="password"
        label="Password"
        name="password"
        onChange={props.onChange}
        value={props.user.password}
        error={props.errors.password}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
      <button className="btn btn-primary">
        {" "}
        <Link to="/courses" onClick={props.handleDelete}>
          delete
        </Link>
        de
      </button>
    </form>
  );
}

export default SignIn;
