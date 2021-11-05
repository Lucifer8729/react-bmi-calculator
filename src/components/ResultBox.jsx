import React from "react";

import { Typography } from "@mui/material";

const ResultBox = ({ value: { bmi, status }, color }) => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Your BMI is{" "}
        <Typography sx={{ display: "inline-block", fontWeight: "bold", color }}>
          {bmi}
        </Typography>
      </Typography>
      <Typography variant="subtitle1">
        You are currently{" "}
        <Typography sx={{ display: "inline-block", fontWeight: "bold", color }}>
          {status}
        </Typography>
      </Typography>
    </>
  );
};

export default ResultBox;
