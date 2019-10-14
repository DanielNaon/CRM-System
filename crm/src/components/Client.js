import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'

class Client extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
    }
  }
  render(){
    let userData = this.props.userData
    
    return(
    <tr>
          <td>{userData.name.split(" ")[0]}</td>
          <td>{userData.name.split(" ")[1]}</td>
          <td>{userData.email}</td>
          <td>{userData.firstContact}</td>
          <td>{userData.emailType}</td>
          <td>{userData.sold ? "true" : "false"}</td>
          <td>{userData.owner}</td>
          <td>{userData.country}</td>
    </tr>)
  } 
}

export default Client;