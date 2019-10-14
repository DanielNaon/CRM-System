import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Pop from './Pop'
import axios from 'axios'


class ClientContent extends Component {
    constructor(){
        super()
        this.state = {
            popUp: false
          }
        }

      jumpPopUp=async()=>{
       this.props.jumpPopUp(this.props.userData)
        }
    
        render(){
          let userData = this.props.userData

          return(
           
              <tr onClick ={this.jumpPopUp} className="tabContainer">
                <td  className="T">{userData.name.split(" ")[0]}</td>
                <td  className="T">{userData.name.split(" ")[1]}</td>
                <td  className="T">{userData.email}</td>
                <td  className="T">{userData.firstContact}</td>
                <td  className="T">{userData.emailType}</td>
                <td  className="T">{userData.sold ? "True" : "False"}</td>
                <td  className="T">{userData.owner}</td>
                <td  className="T">{userData.country}</td>
              </tr>
      
          )
        } 
      }      

export default ClientContent;