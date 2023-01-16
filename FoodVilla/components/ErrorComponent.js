import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>{error.status}</h1>
      <h2>{error.data}</h2>
    </>
  );
};

export default ErrorComponent;
