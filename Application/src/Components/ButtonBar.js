//Used to implement feature of storing liked gif sources and memes
import {HandThumbsUp, HandThumbsDown} from "react-bootstrap-icons";
import { Toolbar,Button} from "@material-ui/core"
const ButtonBar = () =>{
    
    return(
      
          
               <Toolbar sx={{textAlign: "center"}} style={{justifyContent: "center"}}>
                   <Button onClick={()=>{console.log("Liked");}}><HandThumbsUp></HandThumbsUp></Button>
                   <Button onClick={()=>{console.log("DisLiked");}}><HandThumbsDown></HandThumbsDown></Button>
               </Toolbar>
         
       
    )
}

export default ButtonBar;