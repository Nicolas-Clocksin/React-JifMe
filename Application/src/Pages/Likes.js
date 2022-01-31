//import libraries and componets for the Likes page
import Header from "../Components/Header";
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Button, Grid, ButtonGroup, Typography} from "@material-ui/core";


function Likes(){
    //variable for the library
    const [library, setLibrary] = useState([]);
   
    //used to set the current state of the database to be stored in library
    useEffect(()=>{
        Axios.get('http://localhost:3001/getLibrary').then((response)=>{
            setLibrary(response.data);
        })
      }, []);
      
    //unlike is used to restore the entry's values to default
    const unlike = (entry) =>{
        Axios.put("http://localhost:3001/UpdateStatus", {like: false, dislike: false, id: entry._id});
       
    }
    //dislike is used to update the entry in order to 
    const dislike = (entry) =>{
        Axios.put("http://localhost:3001/UpdateStatus", {like: false, dislike: true, id: entry._id});
        console.log(entry);
    }
    return(
        <div>
            <Header/>
            <body className="body">
            {/* Grid is used to map and display each entry of the dislike page */}

                <Grid spacing={4} className="grid" container direction="row" justifyContent="center" alignContent="center" alignItems="center">
                        {library.map((enteries)=>{
                            if(enteries.like === true){
                            return(

                                    <Grid item xs={4}>
                                            <Typography>{enteries.name}</Typography>
                                           <img alt={enteries.name} classname="gridImage" src={enteries.src}></img>
                                           <ButtonGroup>
                                                <Button onClick={()=>{
                                                    unlike(enteries);
                                                    window.location.reload(false); 
                                                }}>
                                                    Unlike
                                                </Button>
                                                <Button onClick={()=>{
                                                    dislike(enteries);
                                                    window.location.reload(false); 
                                                }}>Dislike</Button>   
                                            </ButtonGroup> 
                                           
                                   

                                </Grid>
                            
                            )}
                        })}
                </Grid>
            </body>
        </div>
    )
}

export default Likes;