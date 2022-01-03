
// import Header from './Components/Header.js';
//import Holder from './Components/Holder';
// import Containers from './Components/Container.js';
// import ButtonBar from './Components/ButtonBar';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { Container, AppBar, Toolbar, Typography, IconButton, Grid, ButtonGroup, Button } from '@material-ui/core';
import {ThumbDown, ThumbUp, Image} from '@material-ui/icons';
import './App.css';
function App() {
  //declaratoin of variables to be used to store and generate memes/gifs

 
  const [url, setURL] = useState("https://media.sproutsocial.com/uploads/meme-example.jpg");
  //const [displayList, setDisplayList] = useState([]);
  const [libraryList, setLibrary]= useState([]);
 

  //get data of images/gif from the library 
  useEffect(()=>{
    Axios.get('http://localhost:3001/getLibrary').then((response)=>{
        setLibrary(response.data);
    })
  }, []);
  
  //onClick: when a user clicks on the image, image is changed from either a gif/image
  //in which a random meme/gif is returned from the generated sources
  const onClick = () => {
     const randomNum = Math.floor(Math.random() * libraryList.length);
     setURL(libraryList[randomNum].src);
    
  }
  const like = () =>{
    
    for(let i = 0; i < libraryList.length; i++){
      if(libraryList[i].src === url){
        console.log(libraryList[i].like);
            Axios.put("http://localhost:3001/like", {like: !libraryList[i].like, id: libraryList[i]._id});
            libraryList[i].like = !libraryList[i].like;  
            console.log(libraryList[i].like);
            break;
          
      }

    }
  }
  const dislike = ()=>{
    for(let i = 0; i < libraryList.length; i++){
      if(libraryList[i].src === url){
        console.log(libraryList[i].dislike);
        Axios.put("http://localhost:3001/dislike", {dislike: !libraryList[i].dislike, id: libraryList[i]._id});
        libraryList[i].dislike = !libraryList[i].dislike;  
        console.log(libraryList[i].dislike);
        break;
        
      }
  }
}
  


  //this is the body of the application in which components are called to be implemented
  //Header accepts the title to be used
  //Container implements the current url and onClick is implemented within
  return (

    <Container maxWidth="sm" className="App">
        <header className="header">
          <AppBar >
            <Toolbar spacing={4}>
              <IconButton><Image></Image></IconButton>
              <Typography variant="h3">JifMe</Typography>
              <Typography variant="subtitle1">Add to Library</Typography>
              <Typography>Likes</Typography>
              <Typography>Disliked</Typography>
            </Toolbar>
          </AppBar>
          </header>
          <div className="Grid">
                <Grid container spacing={4} justifyContent="center" >
                      <Grid item>
                          <img src={url} onClick={onClick}></img>
                      </Grid>
                </Grid>
                <ButtonGroup>
                    <Button color="primary" onClick={like}><ThumbUp></ThumbUp></Button>
                    <Button color="secondary" onClick={dislike}><ThumbDown></ThumbDown></Button>
                </ButtonGroup>
                </div>
    </Container>
  );
}

export default App;
