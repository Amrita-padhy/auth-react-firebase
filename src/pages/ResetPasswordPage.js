import React from 'react'
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ResetPasswordPage() {
  return (
    <div className='main'>
        <div className="forgetPassword_page">
        <div className="form_name">
        Reset Password 
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
            label="New Password"
            variant="outlined"
            required
          />
          <Button
            variant="contained"
            fullWidth
            margin="dense"
            color="secondary"
            >
               Reset Password
          </Button>

        </Box>
        </div>

    </div>
  )
}

export default ResetPasswordPage