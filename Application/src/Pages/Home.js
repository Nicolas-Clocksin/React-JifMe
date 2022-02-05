//imports from React, Axios, Material-UI, Components
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Container, Grid, ButtonGroup, Button } from '@material-ui/core';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import Header from '../Components/Header';

function Home() {

    //variables that are used/set throughout the home page
    const [source, setCurrentSource] = useState({});
    const [libraryList, setLibrary] = useState([]);


    //get data of images/gif from the library and set to Library array
    useEffect(() => {
        Axios.get('http://localhost:3001/getLibrary').then((response) => {
            
            setLibrary(response.data);
            const randomNum = Math.floor(Math.random() * response.data.length);
          
            setCurrentSource(response.data[randomNum]);
        });
    }, []);


    //onClick: a random image/gif is choosen from the library and is then set to the current source to be rendered
    //on the page
    const onClick = () => {
        const randomNum = Math.floor(Math.random() * libraryList.length);
        setCurrentSource(libraryList[randomNum]);
    }

    //when the like icon is selected, this funciton will update the current selection in the database
    //to switch the boolean value currently stored in the database
    const like = () => {
        Axios.put("http://localhost:3001/UpdateStatus", { like: true, dislike: false, id: source._id });
        onClick();
    }


    //dislike when clicked will update the current boolean value of the value stored in dislike
    const dislike = () => {
        Axios.put("http://localhost:3001/UpdateStatus", { like: false, dislike: true, id: source._id });
        onClick();
    }

    return (
        <Container maxWidth="sm" className="App">

            <Header />
            <div className="Grid">

                <Grid container spacing={4} justifyContent="center" >
                    <Grid item>
                        <img alt={source.name} src={source.src} onClick={onClick}></img>
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
export default Home;