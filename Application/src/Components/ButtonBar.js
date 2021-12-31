//Used to implement feature of storing liked gif sources and memes

const ButtonBar = ({addGif}) =>{
    
    return(
        <div className="buttonBar">
            <button className="button">Like</button>
            <button className="button">Dislike</button>
            <button className="button" onClick={addGif}>Add Gif</button>
        </div>
    )
}

export default ButtonBar;