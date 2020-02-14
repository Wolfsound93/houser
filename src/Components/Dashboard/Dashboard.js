import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='Dashboard'>
        <House />
        <div className='dash-header'>
          <h1>Dashboard</h1>
          <Link to='/wizard'>
            <button>Add New Property</button>
          </Link>
        </div>
        <h2>Home Listings</h2>
      </div>
    );
  }
}

export default Dashboard;
