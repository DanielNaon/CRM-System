import React, { Component } from 'react';


class ClientChange extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleSelect = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    updateClient = () => {
        if (this.props.name === 'Sale') {
            this.props.updateClient(this.props.name)
            return
        }
        this.props.updateClient(this.props.name, this.state.value)
    }
    render() {
        return (
            <div ClientChange className="pos">
                <span>{this.props.name}:</span>
                <div className="ccontainer">
                {!this.props.arr ? null :
                    <select className="cin" name="value" defaultValue={''} onChange={this.handleSelect} >
                        <option value="" disabled>Select your option</option>
                        {this.props.arr.map(d => <option value={d} key={d} >{d}</option>)}
                    </select>}
                <button className="cbutton" onClick={this.updateClient} >{this.props.name}</button>
                </div>
            </div>)
    }
}

export default ClientChange;