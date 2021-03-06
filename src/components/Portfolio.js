import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/HCJ.jpg';
import project2 from '../images/React.png';
import project3 from '../images/nodejs.jpeg';
import project4 from '../images/python.png';
import project5 from '../images/mongo-db-logo.png';
import project6 from '../images/team.png';




// CSS Styles

const useStyles = makeStyles ({
    mainContainer: {
        background: "",
        height: "100%",
        
    },

    cardContainer: {
        maxWidth: 285,
        margin: "4rem auto ",
      
    },
    // card: {
    //     maxWidth: "32%",
    //     flexBasis: "50%",

    // },
    button: {
        textDecoration: 'none',
        '&:hover': {
          color: 'white'
        }
    },

    link: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
          color: '#00FFFF',
        },
    },
    
});



const Portfolio = () => {
    const classes = useStyles()
    return (
       <Box component="div" className={classes.mainContainer}>
       <Navbar />
       <Grid container justify="center">
           {/* Project 1 */}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project1}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Chef Portfolio
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                       Created a marketing page for a Chef Portfolio Page.
                       <break>
                       <p></p>Tech Stack: Html5, CSS, and JavaScript
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <Button  size="small" color="primary">
                            <a className={classes.link} href="https://github.com/chef-portfolio-bw/frontend" target=
                            "blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link} href="https://sad-joliot-1ac22b.netlify.com" target=
                            "blank" >Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 2 */}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 2"
                    height="140"
                    image={project2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            React Movie 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Created a movie application that displays current movies.
                        <break>
                       <p></p>Tech Stack: Html5, CSS, React, and JavaScript
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a className={classes.link} href="https://github.com/arashhaji/movieimbd" target= "blank">GitHub</a>
                          
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link} href="https://movieimbd.netlify.com" target=
                            "blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 3 */}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 3"
                    height="140"
                    image={project3}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Water My Plants
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Created a Backend for an application that makes sure you water your plants.
                        <break>
                       <p></p>Tech Stack: Node.js, Express.js, and Knex
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a className={classes.link}  href="https://github.com/Build-Week-Water-My-Plants3/Backend" target= "blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link}  href="https://planetplanners.netlify.com" target=
                            "blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 4 */}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 4"
                    height="140"
                    image={project4}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Tic/Tac/Toe
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Under Construction
                        <break>
                       <p></p>Tech Stack: Python3
                       </break>
                       <break>
                       <p></p>
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a className={classes.link}  href="" target= "blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link}  href="" target=
                            "blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 5 */}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 5"
                    height="140"
                    image={project5}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Under Construction
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        My very own Blog website. Were I can post my favorite blogs.
                        <break>
                       <p></p>Tech Stack: MongoDB, React, Node.js, Express.js, React, and CSS
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a  className={classes.link}  href="" target= "blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link}  href="" target=
                            "blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
           </Grid>
            {/* Project 6*/}
           <Grid className={classes.card} item xs={12} sm={6} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 6"
                    height="140"
                    image={project6}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Miracle Messages
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        An application for the homeless connect with their loved ones.
                        <break>
                       <p></p>Tech Stack: Html5, CSS, JavaScript, Knex, Node.js, Express.js, and React
                       </break>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a  className={classes.link}  href="https://github.com/Lambda-School-Labs/miracle-messages-fe" target= "blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a className={classes.link}  href="https://production.d1v4uoi0wi2hmy.amplifyapp.com" target=
                            "blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
       </Grid>
    
       </Box>

    );
};



export default Portfolio;

