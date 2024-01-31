import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => {
        console.log(res.data);
        this.setState({
          username: '',
        });
        window.alert('User created successfully!');
      })
      .catch(error => {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 400 && error.response.data.message && error.response.data.message.includes('duplicate key')) {
          window.alert('User already exists!');
        } else {
          window.alert('Error creating user. Please try again.');
        }
      });
  }

  render() {
    return (
      <body style={{ width: '100%', height: '100%', margin:"-24px -120px" }}>
      <div style={{width: '197.9vh', height: '92.7vh',backgroundImage: 'url(https://wallpaperset.com/w/full/a/0/0/45519.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <h3 style={{color:"white",textAlign:"center"}}>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label style={{ fontSize: '20px', fontWeight: 'bold',color:"white"}}>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn bg-black text-white" />
          </div>
        </form>
      </div>
      </div>
      </body>
    );
  }
}
