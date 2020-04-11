import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Linked from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Github from '@material-ui/icons/GitHub';

//CSS Styles

const useStyles = makeStyles ({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "",
            "&:hover": {
                fill: "",
                fontSize: "1.8rem",
            }
        },
        
    }
})


const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background:""}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<a href="https://github.com/arashhaji" target="_blank"><Github/></a>}
            />
              <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Linked/>}
            />
              <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Twitter/>}
            />
            
        </BottomNavigation>
    )
}

export default Footer



