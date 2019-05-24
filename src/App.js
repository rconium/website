import React, {Component} from 'react';
import HomePage from './Components/homepage';
import Contact from './Components/contact';
import Projects from './Components/projects';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Richard Conol Remigoso, Jr." scroll>
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume" onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/file/d/164KZUuoy_Fx60UNHN0qJT6SL5fukU2Zg/view?usp=sharing", "_blank")}} >Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Richard Conol Remigoso, Jr.">
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume" onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/file/d/164KZUuoy_Fx60UNHN0qJT6SL5fukU2Zg/view?usp=sharing", "_blank")}} >Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Switch>
                <Route exact path="/website" component={HomePage} />
                <Route exact path="/" component={HomePage} />
                <Route path="/aboutme" component={HomePage} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
              </Switch>
              <footer>
                <p style={{ fontSize: '15px', fontFamily: 'Oxygen', textAlign: 'center' }}>Richard C. Remigoso, Copyright &copy; 2019</p>
              </footer>
            </Content>
          </Layout>
        
        </div>
        
      </div>
    );
  }
  
}

export default App;
