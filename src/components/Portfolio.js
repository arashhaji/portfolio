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
import project5 from '../images/ruby.jpg';
import project6 from '../images/team.png';
import Github from '@material-ui/icons/GitHub';


// CSS Styles

const useStyles = makeStyles ({
    mainContainer: {
        background: "",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 285,
        margin: "4rem auto ",
        
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button  size="small" color="primary">
                            GitHub
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Gihub
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
                        <Button size="small" color="primary">
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

