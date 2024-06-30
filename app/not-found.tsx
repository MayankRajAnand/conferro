import React from "react";

const Error = () => {
  return (
    <div className="flex-center h-screen justify-center items-center text-center">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <a className="back-home" href="#!">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default Error;
