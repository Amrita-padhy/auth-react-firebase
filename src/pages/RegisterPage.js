import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth } from "../context/auth-context";

const RegisterPage = () => {
  
  const { signInWithGoogle, register } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);

  
 

  return (
    <div className="main">
      <form className="register_form" 
      noValidate
      autoComplete="off"
      onSubmit={ e => {
    e.preventDefault();
    // console.log(email,password);
    if (!email || !password) {
      <Alert severity="error">Credentials not valid.</Alert>
    }
    setIsSubmitting(true)
    register(email,password)

    .then((response) => console.log(response))
    .catch((error) => console.log(error.message))
  }}
      >
        <div className="form_name">Register</div>

        
          <TextField
            fullWidth
            margin="dense"
            type="email"
            name="email"
            label="Email address"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            margin="dense"
            type="Password"
            name="Password"
            label="Password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
          type="submit"
            variant="contained"
            fullWidth
            margin="dense"
            color="secondary"
            // isLoading={isSubmitting}
          >
            Sign up
          </Button>
          <div className="login">Login</div>
          <div className="or">OR</div>
          <div className="signInWithGoggle">
            <Button
            type="click"
              startIcon={<GoogleIcon />}
              variant="outlined"
              fullWidth
              margin="dense"
              color="secondary"
              onClick={() =>
                signInWithGoogle()
                  .then((user) => console.log(user))
                  .catch((e) => console.log(e.message))
              }
            >
              Sign in with Goggle
            </Button>
          </div>
        
      </form>
    </div>
  );
};

export default RegisterPage;
