//imports from libraries/components to be used in the applicaiton
import Header from "../Components/Header";
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Grid, ButtonGroup, Typography, IconButton, Icon} from "@material-ui/core";
import {ThumbsUpDown, ThumbUp} from '@material-ui/icons'


function Dislikes(){
    //variable used to set the library state
    const [library, setLibrary] = useState([]);
   
    //used to gather data stored in the current library
    useEffect(()=>{
        Axios.get('http://localhost:3001/getLibrary').then((response)=>{
            setLibrary(response.data);
        })
      }, []);
      
    //onClick the default setting for the image/gif will be reset to default values
    const undislike = (entry) =>{
        Axios.put("http://localhost:3001/UpdateStatus", {like: false, dislike: false, id: entry._id});
       
    }
    //onClick the entry will be updated from disliked and added to the liked of the user
    const like = (entry) =>{
        Axios.put("http://localhost:3001/UpdateStatus", {like: true, dislike: false, id: entry._id});
        console.log(entry);
    }
    return(
        <div>
            <Header/>
            <body className="body">
            {/* Grid mapping is used to display the dislike if it is true in the database */}

                <Grid spacing={4} className="grid" container direction="row" justifyContent="center" alignContent="center" alignItems="center">
                        {library.map((enteries)=>{
                            if(enteries.dislike === true){
                            return(

                                    <Grid item xs={4}>
                                            <Typography>{enteries.name}</Typography>
                                           <img alt={enteries.name} classname="gridImage" src={enteries.src}></img>
                                           <ButtonGroup>
                                                <IconButton color="secondary" onClick={()=>{
                                                    undislike(enteries);
                                                    window.location.reload(false); 
                                                }}>
                                                   <Icon><ThumbsUpDown></ThumbsUpDown></Icon>
                                                </IconButton>
                                                <IconButton color="primary" onClick={()=>{
                                                    like(enteries);
                                                    window.location.reload(false); 
                                                }}><Icon><ThumbUp></ThumbUp></Icon></IconButton>   
                                            </ButtonGroup> 
                                           
                                   

                                </Grid>
                            
                            )}
                        })}
                </Grid>
            </body>
        </div>
    )
}

export default Dislikes;