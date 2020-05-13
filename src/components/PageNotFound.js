import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1> error 404 </h1>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
};

export default PageNotFound;
