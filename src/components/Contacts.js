import React, { useState } from 'react';
import axios from 'axios';
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

const initialValue = {
    first: '',
    last: '', 
    company: '', 
    phone: '', 
    email: ''
}

const Contacts = () => {
    const [contact, setContact] = useState(initialValue);

    const handleChange = e => {
        setContact({...contact, [e.target.name]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(contact)
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        axios.post("https://getform.io/f/36b12311-dad1-41c6-8c66-5e4f35c93919", contact , { headers: { Accept: "application/json"}})
            .then(res => {
                console.log(res)
                alert("Message sent")
            })
            .catch(err => {
                console.log(err)
                alert("Message failed")
            })
        
        setContact(initialValue)
    }


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
                    <form onSubmit={handleSubmit}>
                    <InputField 
                    fullWidth={true} 
                    name="first"
                    label="First Name" 
                    value={contact.first}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    name="last"
                    label="Last Name" 
                    value={contact.last}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>
                    
                    <InputField 
                    fullWidth={true} 
                    name="company"
                    label="Company Name" 
                    value={contact.company}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    label="Phone Number"
                    name="phone"
                    value={contact.phone} 
                    onChange={handleChange}
                    variant="outlined"
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    label="Email" 
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"#ffffff", backgroundColor: "#18ffff",}}} // add color
                    margin="dense" 
                    size="medium"
                    />
                    <br/>

                    <Button 
                    type="submit"
                    className={classes.button}
                    variant="outlined" 
                    fullWidth={true}
                    endIcon={<SendIcon/>}
                    >
                        Submit
                    </Button>
                    </form>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts;
