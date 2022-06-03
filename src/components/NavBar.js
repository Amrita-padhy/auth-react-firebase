import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useHistory, useLocation ,useNavigate} from 'react-router-dom'
import { useAuth } from "../context/auth-context";






function NavBar() {
    const {logout} = useAuth()
    
        let navigate = useNavigate();
        function handleLogin() {
          navigate('/login')
        }
        function handleRegister() {
            navigate('/registration')
          }
          function handleProfile() {
            navigate('/profile-page')
        }
        function handleLogout() {
            navigate('/profile-page')
            // alert("logout user")
            logout()
          }
  return (
    <> 
      <nav className="navBar">
      <AppBar position="static" color="inherit">
        <Toolbar>
            <div className="typography">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase Authentication
          </Typography>
            </div>
            <div className="btns">
          <Button color="inherit"
          onClick={handleLogin}
          >Login</Button>
          <Button color="inherit"
           onClick={handleRegister}
          >register</Button>

          <Button color="inherit"
          onClick={handleProfile}
          >profile</Button>

          <Button color="inherit"
        //   onClick={handleProtected}
          >protected</Button>

          <Button color="inherit"
          onClick={handleLogout}
          >logout</Button>
            </div>
        </Toolbar>
      </AppBar>
    
      </nav>
      
      </>
  )
}

export default NavBar
