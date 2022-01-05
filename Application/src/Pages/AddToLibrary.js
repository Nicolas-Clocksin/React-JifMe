//import Axios, UseState, Material UI, Styles, Components
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {Grid, TextField, Button, Typography} from '@material-ui/core';
import Header from '../Components/Header';
import '../styles/AddToLibrary.css';



//AddToLibrary is a page that is used to add Gifs and Memes to the library of the main page
 function AddToLibrary ()
{
    //Declaration of variables of Upload (for image capture), Memes, Gifs
    const [upload, setUploadSrc] = useState({name: "", src: "", type: "", like: false, dislike: false});
    const [meme, setMeme] = useState({name: "waitingForMeme", src: "http://www.quickmeme.com/img/f3/f3835a3f6ea430e4f797ca998e2dc41d9716314a3e61c40d42bf24ae37f67be7.jpg", type: "image", like: false, dislike: false});
    const [gif, setGifGenerate] = useState({name: "waitingForGif", src: "https://i.imgflip.com/4jh62r.jpg", type: "gif", like: false, dislike: false}); 
    const [library, setLibrary] = useState([]);

    //UseEffect is used to get the current data from the library to compare with later
    useEffect(()=>{
        Axios.get('http://localhost:3001/getLibrary').then((response)=>{
            setLibrary(response.data);
        })
      }, []);
    //This function compares the sources and names stored currently in the database to see if it can be added
    //to avoid any duplicate enteries
    const checkLibrary = (source)=>{
        let inLib = 0;
        for(let i = 0; i < library.length; i++){
            if(source.src === library[i].src || source.name === library[i].name){
                
                inLib = 1;
                break;
            }
        }
        return inLib;
    }
    //This function helps to post the meme to the library database
    const postMeme= ()=>{
        //before entering into the library, the title name/src must not be blank
        const inLibrary = checkLibrary(meme);
       
        if(inLibrary === 1 ){
            alert("Entry Already Exist");
        }
        //Otherwise post to the library
        else{
            
        Axios.post("http://localhost:3001/postLibrary", {name: meme.name, src: meme.src, type: meme.type, like: meme.like, dislike: meme.dislike}).then((response)=>{
           
        });
        //set the meme state back to original to await another upload
       
    }
    setMeme({name: "waitingForMeme", src: "http://www.quickmeme.com/img/f3/f3835a3f6ea430e4f797ca998e2dc41d9716314a3e61c40d42bf24ae37f67be7.jpg", type: "image", like: false, dislike: false});
    }
    //Before the Image is upload the user may view to ensure they have the proper source
    const viewImage = ()=>{
        //sets the current image in the memeUpload form to be set to src provided
        if(meme.name === "" || meme.src === ""){
            alert("Please enter correct value into field");
            setMeme({name: "waitingForMeme", src: "http://www.quickmeme.com/img/f3/f3835a3f6ea430e4f797ca998e2dc41d9716314a3e61c40d42bf24ae37f67be7.jpg", type: "image", like: false, dislike: false})
        }
        else{
        setMeme({name: upload.name, src: upload.src, type: "image", like: false, dislike: false});
        setUploadSrc({name: "", src: "", type: "", like: false, dislike: false})
        //resets values that were inputed in textfield to blank
        document.getElementById("name").value = "";
        document.getElementById("src").value = "";
        }
    }
    //Post gif to the library once it has been generated
    const postGif = ()=>{
        const inLib = checkLibrary(gif);
        if(inLib === 1){
            alert("Gif is in Library");
        }
        else{
            
            Axios.post("http://localhost:3001/postLibrary", {name: gif.name, src: gif.src, type: gif.type, like: gif.like, dislike: gif.dislike}).then((response)=>{
                
            });
            setGifGenerate({name: "waitingForGif", src: "https://i.imgflip.com/4jh62r.jpg", type: "gif", like: false, dislike: false});
        }
    }
    const generateGif = ()=>{
        fetch('https://api.giphy.com/v1/gifs/random?api_key=A5SvR46SrK18epgum4Ms5n4KuqEqOWWB&tag=&rating=r').then(response=> response.json().then(list => setGifGenerate({name: list.data.title, src: list.data.images.downsized_large.url, type: list.data.type, like: false, dislike: false})));
        
    }

    return(

        <div>
           <Header/>
            <Grid className="memeForm" container justifyContent="space-around">
                <Grid item xs={7} justifyContent="center">
                <Typography variant="h6">Image Upload</Typography>
                <img src={meme.src} alt={meme.name}></img>
                </Grid>
                <Grid item xs={7}>
                    <TextField id="name" placeholder="Name" onChange={(e)=>{
                        setUploadSrc({...upload, name: e.target.value})
                    }}/>
                    <TextField id="src" placeholder="Source" onChange={(e)=>{
                        setUploadSrc({...upload, src: e.target.value})
                    }}></TextField>
                    <Button onClick={viewImage}>View Image</Button>
                <Button onClick={postMeme}>Submit </Button>
                </Grid>
                </Grid>
                <Grid className="gifForm" container justifyContent="space-around">
                    <Grid item>
                        <img src={gif.src} alt={gif.name}></img>
                        <Grid item><Button onClick={generateGif}>Generate Gif</Button></Grid>
                        <Grid item><Button onClick={postGif}>Add Gif</Button></Grid>
                    </Grid>
                </Grid>
        </div>
    );
}
export default AddToLibrary;