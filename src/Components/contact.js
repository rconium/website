import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactPic from '../images/contactPic.jpeg';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{ color: "red" }}>Richard Remigoso</h2>
                        <img 
                        src={ContactPic}
                        alt="avatar"
                        style={{ height: '250px' }}
                        />
                        <p style={{ width: '50%', margin: 'auto', paddingTop: '1em' }}>
                            Feel free to contact me either through my phone or email address listed to the right! 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2 style={{ color: "red" }}>Contact Information</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-item">
                                        <i className="fa fa-phone-square" aria-hidden="true" style={{ color: "red" }}/>
                                        (224) 424-8996
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-item">
                                        <i className="fa fa-envelope" aria-hidden="true" style={{ color: "red" }}/>
                                        rremigoso4310@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact