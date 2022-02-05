//import libraries and componets for the ViewLibrary page 
import Header from "../Components/Header";
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, Grid, ButtonGroup, Typography } from "@material-ui/core";
import '../styles/ViewLibrary.css';

function ViewLibrary() {
    //set variables for the library, entry displayed, and if popup is shown
    const [library, setLibrary] = useState([]);
    const [showDialogue, setShowDialogue] = useState(false);
    const [entry, setEntry] = useState([]);

    //used to set the current libary from the Database
    useEffect(() => {
        Axios.get('http://localhost:3001/getLibrary').then((response) => {
            setLibrary(response.data);
        })
    }, []);

    //allows pop up box to show
    const show = () => {
        setShowDialogue(true);

    }
    //disanles pop up from showing
    const disable = () => {
        setShowDialogue(false);
    }
    //on update the entry will be updated in the database and then update it in the current page
    const update = () => {
        Axios.put("http://localhost:3001/UpdateEntry", { name: entry.name, src: entry.src, id: entry._id }).then(() => {
            setLibrary(library.map((value) => {
                return value._id === entry._id
                    ? {
                        id: entry.id, name: entry.name, src: entry.src
                    } : value

            }))
        });
    }
    //using ID sent through, the applicatoin deletes the entry from the database
    function remove(id) {
        Axios.delete(`http://localhost:3001/RemoveEntry/${id}`);
    }
    return (
        <div>
            <Header />
            <body className="body">

                {/* Grid system used to display the enteries in the library each in  a row with the ability
                to remove and edit each entry individually */}
                <Grid className="grid" container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                    {library.map((enteries) => {
                        return (
                            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center">
                                <Grid item xs={5}>
                                    <img alt={enteries.name} classname="gridImage" src={enteries.src}></img>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>{enteries.name}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>{enteries.src.substring(0, 40)}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => {
                                            show();
                                            setEntry(enteries);
                                        }}>Edit</Button>
                                        <Button color="secondary" onClick={() => {

                                            remove(enteries._id);
                                            window.location.reload(false);
                                        }}>Remove</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>

                        )
                    })}
                </Grid>
                {/* The pop up dialogue is unique for each entry as it will display the data to be edited by the user and allow they to adjust for these changes */}
                <Dialog open={showDialogue} onClose={disable}>

                    <DialogContent>
                        <Grid container direction="column" className="form" justifyContent="center" alignContent="center">
                            <Grid item>
                                <img alt={entry.name} src={entry.src}></img>
                            </Grid>
                            <Grid item spacing={5}>
                                <TextField margin="dense" defaultValue={entry.name} label="Name" onChange={(e) => {
                                    setEntry({ ...entry, name: e.target.value });
                                }}></TextField>
                                <TextField margin="dense" defaultValue={entry.src} label="Source" onChange={(e) => {
                                    setEntry({ ...entry, src: e.target.value });
                                }}></TextField>
                            </Grid>
                            <DialogActions>


                                <Button onClick={() => {
                                    update();
                                    disable();
                                }}>Update</Button>
                                <Button onClick={() => {

                                    disable();
                                }}>Cancel</Button>
                            </DialogActions>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </body>
        </div>
    )
}

export default ViewLibrary;