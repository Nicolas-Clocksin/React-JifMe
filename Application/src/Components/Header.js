import PropTypes from 'prop-types'

const header = ({title}) => {
    return(

        <header className="Header">
        <h1 className="title">{title}</h1>
        </header>
    )
}

header.defaultProps = {
    text: 'Deafult Text'
}
header.propTypes = {
    text: PropTypes.string
}

export default header;