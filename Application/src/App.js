
import Header from './Components/Header.js';
import Container from './Components/Container';
import React, {useState, useEffect} from 'react';

function App() {
  const [memeList, setMemeList] = useState([]);
  const [url, setURL] = useState('https://images.theconversation.com/files/12874/original/7tw6cstf-1342069683.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip');
  const [gifSwitch, setGifSwitch] = useState(false);
  const [gif, setGif]= useState('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1')

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x=> x.json().then(list => setMemeList(list.data.memes)));
  },[])
  
  const onClick = () => {
    setGifSwitch(!gifSwitch);
    if(gifSwitch){
    const randomGen = Math.floor(Math.random() * memeList.length);
    const newURL = memeList[randomGen].url;
    setURL(newURL);
    }
    else{
    fetch('https://api.giphy.com/v1/gifs/random?api_key=A5SvR46SrK18epgum4Ms5n4KuqEqOWWB&tag=&rating=r').then(x=> x.json().then(list => setGif(list.data.images.downsized_large.url)))
    console.log(gif);
    setURL(gif);}
    
  }
  return (
    <div className="App">
        <Header title="JifMe"/>
        {onClick}

              <Container link={url} onClick={onClick}/>
            
         
    </div>
  );
}

export default App;
