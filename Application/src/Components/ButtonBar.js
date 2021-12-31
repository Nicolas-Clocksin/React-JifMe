//Used to implement feature of storing liked gif sources and memes

const ButtonBar = ({addGif, liked, disliked}) =>{
    
    return(
        <div className="buttonBar">
            <button className="button" onClick={liked}>Like</button>
            <button className="button" onClick={disliked}>Dislike</button>
            <button className="button" onClick={addGif}>Add Gif</button>
        </div>
    )
}

export default ButtonBar;