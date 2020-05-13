import React, { useState } from "react";
// import { Prompt } from "react-router-dom"
import * as usersApi from "../api/usersApi";
import { toast } from "react-toastify";
//import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import SignIn from "./SignIn";
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
//import { Link } from "react-router-dom";
const Auth = (props) => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    id: null,
    farmer: "",
    number: "",
    password: "",
    //name: "",
  });

  // edit course
  // Dependency array must be decleared

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }
  user.password = bcrypt.hashSync(user.password, salt);

  function formIsValid() {
    const _errors = {};
    if (!user.farmer) _errors.farmer = "farmer name  is required";

    if (!user.number) {
      _errors.number = "Phone number is required";
    }
    if (!user.password) {
      _errors.password = "password is required";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    usersApi.saveUser(user).then(() => {
      props.history.push("/users");
      toast.success("account created");
    });
  }

  /* const submit = () =>hb {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelet(),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };*/

  return (
    <>
      <h2>create account</h2>

      <SignIn
        errors={errors}
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};
export default Auth;
