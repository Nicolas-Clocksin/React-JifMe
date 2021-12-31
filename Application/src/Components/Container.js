
//container holds properties of both button bar and image returned that is retrived from link
//on click it generates a new src to be displayed
const container = ({link, onClick}) => {
    
    return(
        
        <div className="imageDiv">
        
        <img className="image" src={link} onClick={onClick}></img>
      
        </div>
    )
}


export default container;