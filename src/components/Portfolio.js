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
    button: {
        textDecoration: 'none',
        '&:hover': {
          color: 'white'
        }
    }
    
});



const Portfolio = () => {
    const classes = useStyles()
    return (
       <Box component="div" className={classes.mainContainer}>
       <Navbar />
       <Grid container justify="center">
           {/* Project 1 */}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 1
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                       Created a marketing page for a Chef Portfolio Page.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href="https://github.com/chef-portfolio-bw/frontend" target=
                            "_blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a href="https://sad-joliot-1ac22b.netlify.com" target=
                            "_blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 2 */}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 2
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Created a movie application that displays current movies.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a href="https://github.com/arashhaji/movieimbd" target= "_blank">GitHub</a>
                          
                        </Button>
                        <Button  size="small" color="primary">
                        <a href="https://movieimbd.netlify.com" target=
                            "_blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 3 */}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Created a Backend for an application that makes sure you water your plants.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://github.com/Build-Week-Water-My-Plants3/Backend" target= "_blank">GitHub</a>
                        </Button>
                        <Button  size="small" color="primary">
                        <a href="" target=
                            "_blank">Live Demo</a>
                           
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 4 */}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 4
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Github
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
            {/* Project 5 */}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 5
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" to="https://github.com/Build-Week-Water-My-Plants3/Backend">
                            GitHub
                        </Button>
                    </CardActions>
            </Card>
           </Grid>
            {/* Project 6*/}
           <Grid item xs={12} sm={8} md={6}>
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
                            Project 6
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                    </CardActions>
            </Card>
            </Grid>
       </Grid>
    
       </Box>

    );
};



export default Portfolio;

