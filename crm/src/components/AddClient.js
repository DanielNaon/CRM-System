import React, { Component } from 'react';

import ClientInput from './ClientInput';
import ClientChange from './ClientChange';

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getEmails = () => {
        let obj = {}
        this.props.data.forEach(d => {
            if (d.emailType) {
                if (!obj[d.emailType]) {
                    obj[d.emailType] = d.emailType
                }
            }
        })
        return Object.keys(obj)
    }
    getOwners = () => {
        let obj = {}
        this.props.data.forEach(d => {
            if (!obj[d.owner]) {
                obj[d.owner] = d.owner
            }
        })
        return Object.keys(obj)
    }
    updateClient = (name, value = null) => {
        let obj = {}
        if (name === 'Owner'){
            obj = {
                name: this.state.name,
                value: value,
                key: 'owner'
            }
        }
        else if (name === 'Email'){
            obj = {
                name: this.state.name,
                value: value,
                key: 'emailType'
            }
        }
        else if (name === 'Sale'){
            obj = {
                name: this.state.name,
                value: true,
                key: 'sold'
            }
        }
        this.props.updateClient(obj)
    }
    render() {
        return (
            <div>
                <i class="fas fa-user-cog iact"></i>
                <p><strong>Update:</strong></p>
                <ClientInput  data={this.props.data} name={this.state.name} handleChange={this.handleChange} />
                <ClientChange data={this.props.data} arr={this.getOwners()} name='Owner' updateClient={this.updateClient} />
                <ClientChange data={this.props.data} arr={this.getEmails()} name='Email' updateClient={this.updateClient} />
                <ClientChange data={this.props.data} arr={null} name='Sale' updateClient={this.updateClient} />
            </div>)
    }
}

export default AddClient;