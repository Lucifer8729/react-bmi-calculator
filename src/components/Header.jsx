import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Tooltip from "@mui/material/Tooltip";

const Header = ({ reset }) => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="fixed" color="success">
        <Toolbar>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            style={{ width: "2rem", marginRight: 10 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
            />
          </svg>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple BMI Calculator
          </Typography>
          <Tooltip title="reset">
            <IconButton
              size="small"
              color="inherit"
              sx={{ mr: 1 }}
              onClick={reset}
            >
              <AutorenewIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
