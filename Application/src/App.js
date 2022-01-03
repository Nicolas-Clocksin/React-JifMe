
import Header from './Components/Header.js';
//import Holder from './Components/Holder';
import Container from './Components/Container.js';
import ButtonBar from './Components/ButtonBar';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { Button } from '@material-ui/core';

function App() {
  //declaratoin of variables to be used to store and generate memes/gifs

 
  const [url, setURL] = useState("https://media.sproutsocial.com/uploads/meme-example.jpg");
  const [displayList, setDisplayList] = useState([]);
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
  
  //this is the body of the application in which components are called to be implemented
  //Header accepts the title to be used
  //Container implements the current url and onClick is implemented within
  return (
    <div className="App">
        <Header title="JifMe"/>
        

              <Container link={url} onClick={onClick}/>
              <ButtonBar/>
             
    </div>
  );
}

export default App;
