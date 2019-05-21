import React, {Component} from 'react';
import HomePage from './Components/homepage';
import AboutMe from './Components/aboutme';
import Contact from './Components/contact';
import Projects from './Components/projects';
import Resume from './Components/resume';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
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
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Richard Conol Remigoso, Jr.">
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
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
                <Route path="/resume" component={Resume} />
            </Switch>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
  
}

export default App;
