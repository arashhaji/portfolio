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
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>About Me</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            About
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "white"}}>
                            Arash Haji-Hassanzadeh
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                            Forward-thinking Full Stack Web Development Student proficient in generating high-quality projects by leveraging tenacious approach and strong attention to detail. Service-oriented and performance-driven with excellent organizational, multitasking and problem-solving abilities. Experienced Franchise Owner with a demonstrated history of working in the food & beverages industry. Skilled in Customer Service, Sales, Public Speaking, Social Media, and Leadership. Strong business development professional with a Bachelor's degree focused in Marketing from Western Michigan University. 
                        </Typography>

                    </Box>
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
                            Own and Operate 3 Location with the Cottage Inn Pizza franchise
                            Recruited, hired and trained new employees, including monitoring and review of individual performance. Oversea all department with over 35 employees Streamlined efficiency, reduced labor hours and boosted profitability to optimize overall productivity. Remained calm and professional in stressful circumstances and when dealing with unhappy customers, effectively diffusing situations.Enhanced data collection accuracy by preparing, authoring and updating communications and policy memorandums. Cross-trained in every store role to maximize operational knowledge.Extended existing customer relationships through extensive communication and tried-and-true marketing strategies.Established ambitious goals for employees to promote achievement and surpass business targets. Strengthened product branding initiatives and coordinated effective marketing campaigns. Forecasted trends in expected business levels and adjusted labor and inventory to match expectations. Increased overall team efficiency and productivity.Addressed internal and customer-related issues each day and affected strategic resolutions. Coordinated and launched grand openings for new stores. Drove profit increases by leveraging market knowledge and natural leadership talents.Collaborated with staff to maximize customer satisfaction, streamline procedures and improve bottom-line profitability.Monitored supplier operations to verify quality, delivery schedule and conformance to contract specifications. Ran daily reports to assess performance and make proactive adjustments.Established, enforced and updated policies keeping business agile and responsive to changing market conditions.
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
                            Led teams of 10-15 employees to complete large installation event and promotion projects on time and within specific parameters for the client. Successfully led key projects which resulted in positive revenue stream for the company.
                            Planned and executed events around metro Detroit. Worked alongside entire promotion team in energetic and creative environment. Mentored other artists on quality standards and improvements.Consistently met schedules and deadlines for all event and promotion projects. Developed strong working knowledge of the event and promotion industry to enable early identification of potential issues.
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
                        style={{color: "white"}}>
                            Lambda School
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                            Full Stack Web Development JavaScript, React, HTML, CSS, NODE, PYTHON, REDUX, and SQL. 
                           
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
                        style={{color: "white"}}>
                            Western Michigan University
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                            Bachelor Degree In Marketing with a Minor in Economics.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}></Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Certifications
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "white"}}>
                            <br/>
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                           End-to-End JavaScript Testing with Cypress.io,
                           React Context API Development, SEO, and Google Analytic. 

                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}></Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                           Skills
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "white"}}>
                            <br/>
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                             Active Listening, Adaptability, Communication, Creativity, Critical Thinking, Customer Service, Decision Making, Interpersonal Communication, Management, Leadership, Organization, Public Speaking, Problem-solving, and Teamwork.
                        </Typography>

                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}></Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography 
                        variant="h5" 
                        align="center"
                        className={classes.subHeading}
                        >
                            Languages
                        </Typography>
                        <Typography 
                        variant="body1" 
                        align="center" // add color
                        style={{color: "white"}}>
                            <br/>
                        </Typography>
                        <Typography 
                        variant="subtitle1" 
                        align="center" // add color
                        style={{color: "#00FFFF"}}>
                            Fluent in Farsi, German, and English.
                        </Typography>

                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Resume;

