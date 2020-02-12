import React, { Component } from 'react';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Episodes from '../src/components/Episodes/Episodes';
import About from '../src/components/About/About';
import Player from '../src/components/Player/Player';
import NotFound from '../src/components/NotFound';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component{

  state = {
    isShowing: false,
    activeEpisode: ''
  }

  onClose = () => {
      this.setState({
      isShowing: false,
      })    
  }

  getEpisode = episode => {
    this.setState({
      isShowing: true,
      activeEpisode: episode
    })
  }

  render(){
    return (
    <>
    <Router>
    <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/episodes" render={() => <Episodes getEpisode={this.getEpisode} />} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      </Router>
  { this.state.isShowing && 
    <Player 
      onClose={this.onClose}
      activeEpisode={this.state.activeEpisode}
      />
       }
    </>
  );
}
}