import React from "react";

import {
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const UserInput = (props) => {
  const { label, tab1, tab2, type, handleUnitChange, value, handleValue } =
    props;
  const [alignment, setAlignment] = React.useState(tab1);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      handleUnitChange(newAlignment);
    }
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Enter your {type} :
      </Typography>
      <TextField
        label={label}
        variant="outlined"
        color="success"
        sx={{ mb: 1 }}
        value={value}
        type="number"
        onChange={(e) => {
          const input = e.target.value;
          handleValue(input);
        }}
      />
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        size="small"
        sx={{ mb: 5 }}
      >
        <ToggleButton value={tab1}>{tab1}</ToggleButton>
        <ToggleButton value={tab2}>{tab2}</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default UserInput;
