import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import ClientContent from './ClientContent'
import ClientHeaders from './clientHeaders'

import Pop from './Pop';


class Clients extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            input: '',
            select: "name",
            popUp: false,
            user: ""
        }
    }
    changeInput=(event)=>{
        let input = event.target.value
        this.setState({input}, function(){
            console.log("change the state " +this.state.input)
        })
    }
    
    jumpPopUp=(user)=>{
        this.setState({
            popUp: !this.state.popUp,
             user:user}, function(){
          console.log(this.state.user)
        })
      }
    render(){
        
        let data = this.props.data
        return(
        <div>
          <input className ="category"value={this.state.input} onChange={this.changeInput}></input>
          <select className="category" onChange={this.changeSelect} >
            <option value="name">name</option>
            <option value="country">country</option>
            <option value="owner">owner</option>
          </select>
            
            {this.state.popUp ? <Pop userData={this.state.user} ChangeUser={this.props.ChangeUser} /> : null}
           <ClientHeaders/>
          {this.props.data.filter(d=>d[this.state.select].toLowerCase().includes(this.state.input)).map(m=><ClientContent userData={m} jumpPopUp={this.jumpPopUp}/>)}
        </div>)
      }
    }

export default Clients;