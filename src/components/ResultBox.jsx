import React from "react";

const ResultBox = ({ value: { bmi, status } }) => {
  return (
    <>
      {bmi}
      <br />
      {status}
    </>
  );
};

export default ResultBox;
