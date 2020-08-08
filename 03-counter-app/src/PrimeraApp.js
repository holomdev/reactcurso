import React from "react";

const PrimeraApp = ({ saludo = "No saludo" }) => {
  return (
    <>
      <h1> {saludo} </h1>
      <p>Mi primera app</p>
    </>
  );
};

export default PrimeraApp;
