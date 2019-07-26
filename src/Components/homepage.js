import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import HomePic from '../images/profilePic.png';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src={HomePic}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Computer Engineering Student</h1>
                            <hr/>
                            <p>
                                As a junior at the University of Illinois at Chicago, my academic focus is in Computer Engineering. I have experience in leadership, customer service, 
                                computer deployment, and mobile/web development. I thrive in a work environment that has a creative business culture – a place where a team of diverse talents 
                                collaborate to find the best possible ideas. My passion for technology is deeply rooted in my interest in trying to make a positive impact for the world, whether 
                                it be through using hardware or software. This ambition has been my driving force in my studies and in my pursuit to become a Computer Engineer. My past internship 
                                has allowed me to experience what it is like to be in the software development industry. That experience has not only supplemented my growth, but also expanded my 
                                views. One of which, I now consider myself as a lifelong learner. Other than technology, I am very much interested in hiking, travelling, and participating in 
                                sports activities, particularly in tennis and basketball. 
                            </p>
                            <hr/>
                            <p>C++ | C | Python | Java | Embedded Systems | Assembly Language</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/richardremigoso/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/deNuru" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/rconol06/?hl=en" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>

                                {/* YouTube */}
                                <a href="https://www.youtube.com/channel/UCAv_Y1Gs04Nui5fNfwmQbBg" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home