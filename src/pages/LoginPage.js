import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation ,useNavigate} from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from "../context/auth-context";






const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signInWithGoogle,login } = useAuth();

  return (
    <div className="main">
      <form className="login_form" noValidate
          autoComplete="off"
          onSubmit={ e => {
            e.preventDefault();
            // console.log(email,password);
            if (!email || !password) {
              <Alert severity="error">Credentials not valid.</Alert>
            }
            setIsSubmitting(true)
            login(email,password)
        
            .then(response =>{
              console.log(response)
              navigate("/profile-page")
            })
            .catch(error => {
              console.log(error.message)
            })
              
          }}
          
          >
      <div className="form_name">
        Login
          </div>
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
            onClick={() =>
              signInWithGoogle()
                .then(user => {
                  // handleRedirectToOrBack()
                  console.log(user)
                })
                .catch(e => console.log(e.message))
            }
          >Sign in with Goggle</Button>
          </div>
        
      </form>
    </div>
  );
};

export default LoginPage;
