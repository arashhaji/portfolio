import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import { TextField,Typography,Button,Grid,Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

//CSS Styles

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        
        
    },
    button: {
        marginTop: "1rem",
        color: "#00FFFF", // add color
        borderColor: "#00FFFF", // add color
    }
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color: "", // add color
        },
        "& label": {
            color: "white", // add color
        },
        "&.MuiOutlinedInput-root": {
            "& fieldSet": {
                borderColor: "", // add color
               
            },
            "&:hover fieldset": {
                borderColor: "#00FFFF", // add color
            },
            "& .Mui-focused fieldset": {
                borderColor: "#00FFFF", // add color
            },
        },
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles()

    return (
        <Box component="div" style={{ background: "", height: "100vh"}}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography 
                    variant="h5"
                    style={{
                        color: "#00FFFF", // add color
                        textAlign: "center",
                        textTransform: "uppercase",
                       
                        
                    }}
                    >
                        contact me
                    </Typography>
                    <InputField 
                    fullWidth={true} 
                    label="First Name" 
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    label="Last Name" 
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>
                    
                    <InputField 
                    fullWidth={true} 
                    label="Company Name" 
                    variant="outlined" 
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    label="Phone Number" 
                    variant="outlined"
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    label="Email" 
                    variant="outlined" 
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <Button 
                    className={classes.button}
                    variant="outlined" 
                    fullWidth={true}
                    endIcon={<SendIcon/>}
                    >
                        Submit
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts;
