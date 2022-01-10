import {AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import {Home} from '@material-ui/icons';
import {useNavigate} from "react-router-dom";
import "../App.css";
function Header () {
    let navigate = useNavigate();
    return(

        <header className="Header">
        <AppBar>
         <Toolbar spacing={4} variant="regular">
           <IconButton onClick={()=>{
               navigate("/");
           }}><Home/></IconButton>
          <Typography>
           <Button onClick={()=>{
               navigate("/AddToLibrary");
           }}>Add To Library</Button>
          </Typography>
          <Typography>
           <Button onClick={()=>{
               navigate("/ViewLibrary");
           }}>View Library</Button>
          </Typography>
          
           
         </Toolbar>
       </AppBar>
        </header>
    )
}
export default Header;