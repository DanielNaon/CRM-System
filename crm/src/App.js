import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Actions from './components/Actions'
import Anayltics from './components/Analytics'
import Clients from './components/Clients'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []

    }
  }

  // requsting the data from the MongoDB and pushing to to my state
  dataInTheState = async () => {
    const data = await axios.get('http://localhost:8080/clients')
    this.setState({ data: data.data }, function () {
      // console.log(this.state.data)
    })
  }
  componentDidMount = () => {
    this.dataInTheState()
  }
 //popJs//
  ChangeUser = async (firstName, lastName, country, email) => {
    let newDetails = {
      name: `${firstName} ${lastName}`,
      country: country
    }
    await axios.put(`http://localhost:8080/update/${email}`, newDetails)
    this.dataInTheState()
  }
  //addClient//
  addClient = async (newClient) => {
    await axios.post(`http://localhost:8080/addClient`, newClient)
    this.dataInTheState()
  }
//updateClient//
  updateClient = async (client) => {
    await axios.put(`http://localhost:8080/updateClient`, client)
    this.dataInTheState()
  }

  render() {
    return (
      <div>
        <Router>
          <div className="navbar">
            <Link to="/Clients"><span className="navbarChild">Clients</span></Link>
            <Link to="/Actions"><span className="navbarChild">Actions</span></Link>
            <Link to="/Analytics"><span className="navbarChild">Analtyics</span></Link>
          </div>
          <div>
            <Route exact path="/Clients" render={() => <Clients data={this.state.data} ChangeUser={this.ChangeUser} />} />
            <Route exact path="/Actions" render={() => <Actions data={this.state.data} addClient={this.addClient} updateClient={this.updateClient} />} />
            <Route exact path="/Analytics" render={() => <Anayltics data={this.state.data} />} /> 
          </div>
        </Router>
      </div>)
  }
}

export default App;