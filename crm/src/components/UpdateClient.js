import React, { Component } from 'react';


class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            owner: '',
            country: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addClient = () =>{
        let date = new Date()
        let obj = {
            name: this.state.firstName  + ' ' + this.state.lastName,
            owner: this.state.owner,
            country: this.state.country,
            email: this.state.email,
            firstContact: `${date.getFullYear()}-${date.getMonth() +  1}-${date.getDate()}`,
            sold: false,
            emailType: null
        }
        this.props.addClient(obj)
    }
    render() {
        return (
            <div className="updateClientContainer">
                <i class="fas fa-user-plus iact"></i>
                <p><strong>Add Client:</strong></p>
                <div className="pos"><span> First Name:</span> <input className="in" type="text" name='firstName' value={this.state.firstName} placeholder='First name' onChange={this.handleChange} /></div><br></br>
                <div className="pos"><span> Last Name:</span> <input className="in" type="text" name='lastName' value={this.state.lastName} placeholder='Last name' onChange={this.handleChange} /></div><br></br>
                <div className="pos"><span> Owner:</span><input className="in" type="text" name='owner' value={this.state.owner} placeholder='Owner' onChange={this.handleChange} /></div><br></br>
                <div className="pos"><span> Email:</span> <input className="in" type="email" name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} /></div><br></br>
                <div className="pos"><span> Country:</span><input className="in" type="text" name='country' value={this.state.country} placeholder='Country' onChange={this.handleChange} /></div><br></br>
                <button onClick={this.addClient} >Add Client</button>
            </div>)
    }
}

export default UpdateClient;