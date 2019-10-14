import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'


class ClientHeaders extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
          }
        }
        render(){
          return(
            
              <tr >
                <th className="T">First Name</th>
                <th className="T">Last Name</th>
                <th className="T">Email</th>
                <th className="T">First Contact</th>
                <th className="T">Email Type</th>
                <th className="T">Sold</th>
                <th className="T">Owner</th>
                <th className="T">Country</th>
             </tr>
           
          )
        } 
      }      

export default ClientHeaders;