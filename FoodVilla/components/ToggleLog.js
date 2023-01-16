import React from "react";

const ToggleLog = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={toggle}>Logout</button>
      ) : (
        <button onClick={toggle}>Login</button>
      )}
    </div>
  );
};

export default ToggleLog;
