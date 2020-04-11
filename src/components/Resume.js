import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Box } from '@material-ui/core';
import Navbar from './Navbar';
import { red } from '@material-ui/core/colors';

// CSS Styles

const useStyles= makeStyles(theme=>({
    mainContainer: {
        background: ""
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #00FFFF",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }

        }
    },

    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #00FFFF" , // add color after solid
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% -5px)",
            borderStyle: "solid",
            borderColor: "transparent transparent #00FFFF #00FFFF",  //add color before  twice transparent 
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: ""
            },
            "&:nth-of-type(2n):before": {
               right:"auto",
               left: "-0.625rem",
               borderColor: "transparent transparent #00FFFF #00FFFF " //add color before  twice transparent 
            }
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#00FFFF", // add color
        color: "white", // add color
        padding: "1rem 0",
        "&:before": {
            display:"none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#00FFFF", // add color
        padding: "3rem 0",
        textTransform: "uppercase"

    },
    subHeading: {
        color: "#00FFFF", // add color
        padding: "0",
        textTransform: "uppercase"
    }

}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                Resume
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2006-2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Franchise Owner
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center"  // add color
                        style={{color: "white"}}> 
                            Cottage Inn Pizza
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center"  // add color
                        style={{color: "#00FFFF"}}>                       
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2000-2006</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Entertainment Director
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "white"}}>
                            Donya events
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019-2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Education
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            Lambda School
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "tomato"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2002-2006</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Education
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            Western Michigan University
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "tomato"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            web design
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            company name where worked
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            web design
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            company name where worked
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2013</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            web design
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            company name where worked
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "tan"}}>
                            Lorem ipsum dolor sit amet consectetor, adipisicing elit, non,
                            officifis? Veritatis dolore eum eos sequi iste iure possimus ad quos.
                        </Typography>

                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Resume;

