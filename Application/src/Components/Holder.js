import ButtonBar from './ButtonBar';
import {Container, Paper} from '@material-ui/core';
//container holds properties of both button bar and image returned that is retrived from link
//on click it generates a new src to be displayed
const Holder = ({link, onClick}) => {
    
    return(
        <Container justify="center" maxWidth="md"  border="2">
        <div className="imageDiv">
        <Paper variant="outlined">
        <img className="images" alt="source" src={link} onClick={onClick}></img>
        </Paper>
        <ButtonBar />
        </div>
        </Container>
    )
}


export default Holder;