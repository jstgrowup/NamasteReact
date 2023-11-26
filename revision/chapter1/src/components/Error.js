import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  
  return <h1>{err.data}</h1>;
}

export default Error;
