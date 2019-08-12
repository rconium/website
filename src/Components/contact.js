import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield } from 'react-mdl';
import ContactPic from '../images/contactPic.jpeg';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{ color: "red" }}>Richard Conol Remigoso</h2>
                        <img 
                        src={ContactPic}
                        alt="avatar"
                        style={{ height: '200px' }}
                        />
                        <p style={{ width: '50%', margin: 'auto', paddingTop: '1em', marginBottom: '40px' }}>
                            Feel free to contact me either through my phone or email address listed below! 
                        </p>
                        <hr/>
                        <h2 style={{ color: "red" }}>Contact Information</h2>
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
                    <Cell col={6}>
                        <div>
                            {/* Textfield with floating label */}
                            <Textfield
                                onChange={() => {}}
                                label="Text..."
                                floatingLabel
                                style={{width: '200px'}}
                            />

                            {/* Numeric Textfield with floating label */}
                            <Textfield
                                onChange={() => {}}
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                error="Input is not a number!"
                                label="Number..."
                                floatingLabel
                            />
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact