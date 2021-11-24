import PropTypes from 'prop-types'

const container = ({link}) => {
    return(
        <img src={link} className="image"></img>
    )
}

container.defaultProps = {
    link: 'https://media.sproutsocial.com/uploads/meme-example.jpg',
}
container.propTypes = {
    link: PropTypes.string,
}

export default container;