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
        marginTop: "2rem",
        color: "#00FFFF", 
        borderColor: "#00FFFF", 
    }
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color: "#00FFFF", 
        },
        "& label": {
            color: "white",  
        },

        '& label.Mui-focused': {
            color: "#00FFFF",
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: "#00FFFF",
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: "#00FFFF",
            },
            '&:hover fieldset': {
              borderColor: "#00FFFF",
            },
            '&.Mui-focused fieldset': {
              borderColor: "#00FFFF",
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
                        color: "#00FFFF", 
                        textAlign: "center",
                        textTransform: "uppercase",                       
                    }}
                    >
                        contact me
                    </Typography>
                    <form onSubmit={handleSubmit}>
                    <div className="input-background">

                        <InputField 
                        fullWidth={true} 
                        name="first"
                        label="First Name" 
                        value={contact.first}
                        onChange={handleChange}
                        variant="outlined" 
                        inputProps={{ style: {color:"white", backgroundColor: "",}}} 
                        margin="dense" 
                        size="medium"
                
                        
                        />
                    </div>

                    <div className="input-background">

                    <InputField 
                    fullWidth={true} 
                    name="last"
                    label="Last Name" 
                    value={contact.last}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"white", backgroundColor: "",}}} 
                    margin="dense" 
                    size="medium"
                    />
                    </div>
                    <div className="input-background">
                    
                    <InputField 
                    fullWidth={true} 
                    name="company"
                    label="Company Name" 
                    value={contact.company}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "",}}} 
                    margin="dense" 
                    size="medium"
                    />
                    </div>

                    <div className="input-background">
                    <InputField 
                    fullWidth={true} 
                    label="Phone Number"
                    name="phone"
                    value={contact.phone} 
                    onChange={handleChange}
                    variant="outlined"
                    inputProps={{ style: {color:"", backgroundColor: "",}}}
                    margin="dense" 
                    size="medium"
                    />
                    </div>

                    <div className="input-background">
                    <InputField 
                    fullWidth={true} 
                    label="Email" 
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    variant="outlined" 
                    inputProps={{ style: {color:"", backgroundColor: "",}}} 
                    margin="dense" 
                    size="medium"
                    />
                    </div>


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
