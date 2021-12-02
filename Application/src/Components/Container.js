
// import { GiphyFetch } from '@giphy/js-fetch-api'

// const gif = new GiphyFetch('A5SvR46SrK18epgum4Ms5n4KuqEqOWWB');
// const gifTest = await gif.random();
import ButtonBar from './ButtonBar';
const container = ({link, onClick}) => {
    
    return(
        
        <div className="imageDiv">
        
        <img className="image" src={link} onClick={onClick}></img>
        <ButtonBar />
        </div>
    )
}


export default container;