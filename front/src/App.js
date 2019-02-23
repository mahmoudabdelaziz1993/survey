import React, { Component } from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';
import Home from "./components/Home";
import Landing from './components/Landing';
import Survey from './components/survay-components/Survey'


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/survey/new" component={Survey} />

        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null,actions)(App);
