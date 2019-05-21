import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Dio Brando</h2>
                        <img 
                        src="https://i.kym-cdn.com/photos/images/original/000/974/149/f82.png"
                        alt="avatar"
                        style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            MUDA MUDA MUDA MUDA MUDA MUDA MUDA! ORA ORA ORA ORA ORA ORA ORA ORA ORA ORAO ORA!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (224) 424-8996
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        rremigoso4310@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
                <footer>
                    <p style={{ fontSize: '15px', fontFamily: 'Oxygen', textAlign: 'center' }}>Richard C. Remigoso, Copyright &copy; 2019</p>
                </footer>
            </div>
        )
    }
}

export default Contact