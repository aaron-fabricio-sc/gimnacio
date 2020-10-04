import React from "react";

import "../components/styles/Errors.css";

import ErrorImagen from "../images/500.png";

const ErrorServer = () => {
  return (
    <div className="text-center">
      <h1 className="Error_Text">Error 500 Server Error</h1>
      <img src={ErrorImagen} alt="Server error" className="Error_Image" />
    </div>
  );
};

export default ErrorServer;
