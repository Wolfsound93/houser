import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    };
  }

  inputChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
        <h3>property Name</h3>
        <input name='name' />
        <h3>Address</h3>
        <input name='Address' />
        <h3>City</h3>
        <input name='city' />
        <h3>State</h3>
        <input name='state' />
        <h3>Zip</h3>
        <input name='zip' />
        <br />
        <br />
        <button>Complete</button>
      </div>
    );
  }
}

export default Wizard;
