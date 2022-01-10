import Header from "../Components/Header";
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {ImageList, TextField, Button, ImageListItem, IconButton, Icon, ImageListItemBar, Dialog, DialogActions, DialogTitle, DialogContent} from "@material-ui/core";
import {EditOutlined, Close} from '@material-ui/icons';
import '../styles/ViewLibrary.css';

function ViewLibrary(){
    const [library, setLibrary] = useState([]);
    const [showDialogue, setShowDialogue] = useState(false);
    const [showAlert, setShowAlert]= useState(false);
    const [entry, setEntry] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/getLibrary').then((response)=>{
            setLibrary(response.data);
        })
      }, []);
      
    const show = ()=>{
        setShowDialogue(true);
        
    }
    const disable = ()=>{
        setShowDialogue(false);
    }
    const update = () =>{
        Axios.put("http://localhost:3001/UpdateEntry", {name: entry.name, src: entry.src, id: entry._id}).then(()=>{
           setLibrary(library.map((value)=>{
               return value._id === entry._id
                     ?{
                        id: entry.id, name: entry.name, src: entry.src
                   }:value
               
           }))
        });
        console.log(entry);
    }
    const remove = ()=>{
        Axios.delete(`http://localhost:3001/RemoveEntry/${entry._id}`);
    }
    return(
        <div>
            <Header/>
            <body className="body">
            
               <ImageList>
                {library.map((enteries)=>{
                    
                    return (
                        <ImageListItem key={enteries.src}>
                            <img src={enteries.src} sx={{height: 100, width:200}}></img>
                            <ImageListItemBar title={enteries.name} subtitle={enteries.src} actionIcon={
                                <IconButton onClick={()=>{
                                    show();
                                    setEntry(enteries);
                                }}>
                                    <Icon><EditOutlined/></Icon>
                                </IconButton>
                            }>
                            
                            </ImageListItemBar>
                        </ImageListItem>
                        
                    );
                })

                }
                </ImageList>
                <Dialog open={showDialogue} onClose={disable}>
                        <DialogTitle>Edit Entry: {entry.name}
                            <IconButton onClick={disable}>
                                    <Icon>
                                        <Close/>
                                    </Icon>
                            </IconButton>
                        </DialogTitle>
                    <DialogContent>
                        <img src={entry.src}></img>
                        <TextField defaultValue={entry.name} label="Name" onChange={(e)=>{
                            setEntry({...entry, name: e.target.value});
                        }}></TextField>
                        <TextField defaultValue={entry.src} label="Source" onChange={(e)=>{
                            setEntry({...entry, src: e.target.value});
                        }}></TextField>
                        <DialogActions>
                           
                            <Button onClick={()=>{
                                remove();
                                disable();
                            }}>Remove</Button>
                            <Button onClick={()=>{
                                update();
                                disable();
                            }}>Update</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </body>
        </div>
    )
}

export default ViewLibrary;