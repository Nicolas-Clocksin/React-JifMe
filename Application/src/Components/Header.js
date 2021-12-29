import { Typography, AppBar,Box } from "@material-ui/core";
const header = ({title}) => {
    
    return(
        <>
        <Box>
        <AppBar position="fixed" color="inherit" >
            <Typography variant="h2" align="center">JifMe</Typography>
        </AppBar>
        </Box>
        </>
    )
}
export default header;