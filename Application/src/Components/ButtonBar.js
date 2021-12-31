//Used to implement feature of storing liked gif sources and memes
import {Button, ButtonGroup} from "@material-ui/core";
import {ThumbUp, ThumbDown} from "@material-ui/icons";
const ButtonBar = ({addGif, liked, disliked}) =>{
    
    return(
        <div className="buttonBar">
           <ButtonGroup>
               <Button color="primary" variant="contained"startIcon={<ThumbUp />} onClick={liked}></Button>
               <Button color="secondary" variant="contained" startIcon={<ThumbDown />} onClick={disliked}></Button>
                <Button variant="contained" onClick={addGif}>Add Gif</Button>
           </ButtonGroup>
        </div>
    )
}

export default ButtonBar;