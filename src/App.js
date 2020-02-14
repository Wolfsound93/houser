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
      propertyName: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };

    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios
      .get('/api/info')
      .then(res =>
        this.setState({
          propertyName: res.data,
          address: res.data,
          city: res.data,
          state: res.data,
          zip: res.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <Dashboard />
        <Header />
        <Wizard />
      </div>
    );
  }
}

export default App;
