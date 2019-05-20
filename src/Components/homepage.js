import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        {/*<img
                            src="https://www.shareicon.net/data/256x256/2016/11/21/854794_r2d2_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />*/}
                        <div className="banner-text">
                            <h1>Computer Engineering Student</h1>
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