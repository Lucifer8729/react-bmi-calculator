import React, { useState } from "react";

import { FormControl, Button } from "@mui/material";

import UserInput from "./components/UserInput";
import ResultBox from "./components/ResultBox";

import { calculateBMI } from "./utils/utils";

function App() {
  const [weightValue, setWeightValue] = useState("");
  const [weightUnit, setWeightUnit] = useState("kilogram");
  const [heightValue, setHeightValue] = useState("");
  const [heightUnit, setHeightUnit] = useState("meters");
  const [result, setResult] = useState({ bmi: "", status: "" });

  const handleSubmit = () => {
    const res = calculateBMI(heightValue, heightUnit, weightValue, weightUnit);
    setResult(res);
  };

  return (
    <>
      <FormControl>
        <UserInput
          type="weight"
          label={`in ${weightUnit}`}
          tab1="kilogram"
          tab2="pound"
          handleUnitChange={setWeightUnit}
          value={weightValue}
          handleValue={setWeightValue}
        />
        <UserInput
          type="height"
          label={`in ${heightUnit}`}
          tab1="meters"
          tab2="inches"
          handleUnitChange={setHeightUnit}
          value={heightValue}
          handleValue={setHeightValue}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Calculate bmi
        </Button>
        <ResultBox value={result} />
      </FormControl>
    </>
  );
}

export default App;
