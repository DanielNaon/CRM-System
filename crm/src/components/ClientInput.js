import React, { Component } from 'react';


class ClientInput extends Component {
    handleChange = (e) =>{
        this.props.handleChange(e)
    }
    render() {
        return (
            <div>
                <span>Client:</span>
                <input type='text' className="in" list='clientNames' name='name' value={this.props.name} onChange={this.handleChange} />
                <datalist id='clientNames'>
                    {this.props.data.map(x => <option value={x.name} key={x.name} /> )}
                </datalist>
            </div>)
    }
}

export default ClientInput;