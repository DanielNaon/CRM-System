import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import UpdateClient from './UpdateClient';
import AddClient from './AddClient';

class Actions extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
        <div className="actionsContainer">
        <span className="action"><AddClient data={this.props.data} updateClient={this.props.updateClient} /></span>
        {/* <hr/> */}
        <span className="action"><UpdateClient addClient={this.props.addClient}/></span>
        </div>)
    }
}

export default Actions;