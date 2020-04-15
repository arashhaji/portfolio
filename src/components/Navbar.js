import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import MobileLeftMenuSlider from "@material-ui/core/Drawer";
import Footer from './Footer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    ImportContacts
} from "@material-ui/icons";
import avatar from '../myAvatar.png'

// CSS Styles

const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#00FFFF",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "black"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
    {
        listIcon: <ImportContacts/>,
        listText: "Articles",
        listPath: "/articles"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        left: false
    })

const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open});
});
    const classes = useStyles();

    const sideList = slider => (
        
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="Arash Haji-Hassanzadeh"/>
        <Divider />
        <List>
            {menuItems.map((lsItem, key)=>(
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
                  <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                  <ListItemText className={classes.listItem} primary={lsItem.listText}/>
              </ListItem>
            ))}
        </List>
    </Box>

    );
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#00FFFF"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                      <ArrowBack style={{ color: "black" }}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "black"}}>Menu </Typography>
                    <MobileLeftMenuSlider
                    anchor="left"
                    open={state.left}
                    onClose={toggleSlider("left", false)}
                    >
                        {sideList("left")}
                        <Footer />
                    </MobileLeftMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>

        </>
    );
};

export default Navbar;
