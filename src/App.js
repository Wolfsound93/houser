import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      information: [],
      currentInfo: null
    };

    this.getInfo = this.getInfo.bind(this);
    this.selectInfo = this.selectInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios
      .get('/api/info')
      .then(res => {
        console.log(res);
        this.setState({ information: res.data });
      })
      .catch(err => console.log(err));
  }

  selectInfo(currentInfo) {
    this.setState({ currentInfo });
  }

  render() {
    const { information } = this.state;
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <Dashboard
                  {...props}
                  selectInfo={this.selectInfo}
                  getInfo={this.getInfo}
                  information={information}
                />
              )}
            />
            <Route
              path='/wizard'
              render={props => (
                <Wizard
                  {...props}
                  currentInfo={this.state.currentInfo}
                  getInfo={this.getInfo}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
