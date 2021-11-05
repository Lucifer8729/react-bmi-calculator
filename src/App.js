import React, { useState, useEffect } from "react";

import { FormControl, Button, Paper, Grid, Box } from "@mui/material";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultBox from "./components/ResultBox";

import { calculateBMI } from "./utils/utils";

function App() {
  const [weightValue, setWeightValue] = useState("");
  const [weightUnit, setWeightUnit] = useState("kilogram");
  const [heightValue, setHeightValue] = useState("");
  const [heightUnit, setHeightUnit] = useState("meters");
  const [result, setResult] = useState({ bmi: "", status: "" });
  const [statusColor, setStatusColor] = useState("white");

  const handleSubmit = () => {
    const res = calculateBMI(heightValue, heightUnit, weightValue, weightUnit);
    setResult(res);
  };

  const handleReset = () => {
    setWeightValue("");
    setWeightUnit("kilogram");
    setHeightValue("");
    setHeightUnit("meters");
    setResult({ bmi: "", status: "" });
  };

  useEffect(() => {
    if (result.status === "Underweight") setStatusColor("#ffea00");
    else if (result.status === "Normal") setStatusColor("#357a38");
    else if (result.status === "Overweight") setStatusColor("#ff5722");
    else if (result.status === "Obese") setStatusColor("#f44336");
    else setStatusColor("white");
  }, [setStatusColor, result]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#EEEEEE",
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          overflowY: "auto",
        }}
      >
        <Header reset={handleReset} />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100vh",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/batthern.png")`,
          }}
        >
          <Grid item mt={10} xs={11} sm={8} md={6} lg={4}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderTop: `10px solid ${statusColor}` }}
            >
              <FormControl fullWidth>
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
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  onClick={handleSubmit}
                >
                  Calculate bmi
                </Button>
                <ResultBox value={result} color={statusColor} />
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
