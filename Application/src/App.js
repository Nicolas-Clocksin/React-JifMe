
import Header from './Components/Header.js';
//import Holder from './Components/Holder';
import Container from './Components/Container.js';
import ButtonBar from './Components/ButtonBar';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'

function App() {
  //declaratoin of variables to be used to store and generate memes/gifs
  const [memeList, setMemeList] = useState([]);
  const [gifList, setGifList] = useState([]);
  const [url, setURL] = useState("");
  const [gifSwitch, setGifSwitch] = useState(false);
  const [gif, setGif] = useState("");
 
  //useeffect goes to api library and stores the data retrived in an array of MemeList
  useEffect(() => {
    Axios.get('http://localhost:3001/getImage').then((response) =>{
      setMemeList(response.data);
      
  })}, []);

 
  

  useEffect(()=>{
    Axios.get('http://localhost:3001/getGifs').then((response)=>{
        setGifList(response.data);
    })
  }, []);
  
  //onClick: when a user clicks on the image, image is changed from either a gif/image
  //in which a random meme/gif is returned from the generated sources
  const onClick = () => {
     const gifL = gifList.length;
     const memeL = memeList.length 
     
     setGifSwitch(!gifSwitch);
     if(gifSwitch){
        const randNum = Math.floor(Math.random() * memeL);
        setURL(memeList[randNum].src);
     }
     else{
       const randNum = Math.floor(Math.random() * gifL);
       setURL(gifList[randNum].src);
     }
  }
  const addGif = ()=>{
    fetch('https://api.giphy.com/v1/gifs/random?api_key=A5SvR46SrK18epgum4Ms5n4KuqEqOWWB&tag=&rating=r').then(x=> x.json().then(list => setGif(list.data.images.downsized_large.url)));
    Axios.post('http://localhost:3001/postGif', {src: gif, liked: false, disliked: false}).then((response)=>{
      console.log(gif);
    }).then((response)=>{
      setGifList([...gifList, {src: gif, liked: false, disliked: false}]);
    })
  }
 
  //this is the body of the application in which components are called to be implemented
  //Header accepts the title to be used
  //Container implements the current url and onClick is implemented within
  return (
    <div className="App">
        <Header title="JifMe"/>
        

              <Container link={url} onClick={onClick}/>
              <ButtonBar addGif={addGif}/>
             
    </div>
  );
}

export default App;
