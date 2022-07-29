import React, { Component } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

export default class App extends Component {
  // state={
  //   users: []
  // }
  constructor(props) {
    super(props);
    this.state={
      users: [
        {
          id:1,
          name:"Yakup Çiftçi",
          email:"yakup@gmail.com"
        },
        {
          id:2,
          name:"İsmail Çiftçi",
          email:"ismail@gmail.com"
        },
        {
          id:3,
          name:"Abdullah Keklik",
          email:"keklik@gmail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    })
  }
  deleteUser(id){
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);
    // State Direct Immutable
    this.setState({
      users: updatedUsers
    })
  }
  render() {
    return (
      <div className='container'>
          <h4>User App</h4>
          <hr/>
          <AddUser addUser={this.addUser}/>
          <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
}