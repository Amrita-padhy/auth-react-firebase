import React from 'react'
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ForgetPassword() {
  return (
    <div className='main'>
        <div className="forgetPassword_page">
        <div className="form_name">
        Forgot Password 
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
          <Button
            variant="contained"
            fullWidth
            margin="dense"
            color="secondary"
            >
               Submit
          </Button>
          <div className="or">
              OR
          </div>
          <div className="login_btn">
          <Button 
          variant="text"
          color="inherit"
          >Login</Button>
          </div>
        </Box>
        </div>

    </div>
  )
}

export default ForgetPassword