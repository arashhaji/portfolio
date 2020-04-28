import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//CSS Styles

const useStyles = makeStyles({
    particles: {
        position: "fixed",
        opacity: "0.9"
    }
})

const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar/>
            <Header />
            <Particles
            canvasClassName={classes.particls}
            params={{
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: .1,
                            
                        }
                        
                    },
                    size: {
                        value: 9,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 4,
                            size_min: 0.8,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.6,
                            sync: true
                        }
                    }
                }  
          }}
          />
      </>
    );
};

export default Home;

