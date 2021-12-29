
import Header from './Components/Header.js';
import Holder from './Components/Holder.js';
import React, {useState, useEffect} from 'react';

function App() {
  //declaratoin of variables to be used to store and generate memes/gifs
  const [memeList, setMemeList] = useState([]);
  const [url, setURL] = useState('https://images.theconversation.com/files/12874/original/7tw6cstf-1342069683.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip');
  const [gifSwitch, setGifSwitch] = useState(false);
  const [gif, setGif]= useState('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1')

  //useeffect goes to api library and stores the data retrived in an array of MemeList
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x=> x.json().then(list => setMemeList(list.data.memes)));
  },[])
  
  //onClick: when a user clicks on the image, image is changed from either a gif/image
  //in which a random meme/gif is returned from the generated sources
  const onClick = () => {

    //changes sets switch to T/F
    setGifSwitch(!gifSwitch);

    //if gifSwitch is true then a meme will be pulled from the memeList
    if(gifSwitch){
    const randomGen = Math.floor(Math.random() * memeList.length);
    const newURL = memeList[randomGen].url;
    setURL(newURL);
    }

    //else if gifSwitch is false then a random gif is pulled from Giphy and returned
    else{
    fetch('https://api.giphy.com/v1/gifs/random?api_key=A5SvR46SrK18epgum4Ms5n4KuqEqOWWB&tag=&rating=r').then(x=> x.json().then(list => setGif(list.data.images.downsized_large.url)))
    setURL(gif);}
    
  }
  //this is the body of the application in which components are called to be implemented
  //Header accepts the title to be used
  //Container implements the current url and onClick is implemented within
  return (
    <div className="App">
        <Header title="JifMe"/>
        {onClick}

             <Holder onClick={onClick} link={url}/>
            
         
    </div>
  );
}

export default App;
