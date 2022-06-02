import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import GoogleIcon from '@mui/icons-material/Google';




const LoginPage = () => {
  return (
    <div className="main">
      <div className="login_form">
      <div className="form_name">
        Login
          </div>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            margin="dense"
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            margin="dense"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
          />

          <Button
            variant="contained"
            fullWidth
            margin="dense"
            color="secondary"
            >
              Sign in
          </Button>
          <div className="links">
          <Button 
          color="inherit"

          variant="text">
              Forgot Password ?
          </Button>
          <Button 
          variant="text"
          color="inherit"
          >Register</Button>
          </div>
          <div className="or">
              OR
          </div>
          <div className="signInWithGoggle">
          <Button 
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
            margin="dense"
            color="secondary"
          >Sign in with Goggle</Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
