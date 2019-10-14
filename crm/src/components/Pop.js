import React, {Component} from 'react';



class Pop extends Component {
    constructor(){
        super()
        this.state= {
            firstName: '',
            lastName: '',
            country: ''
        }
    }
    changeFirstName=(event)=>{
        let firstName = event.target.value
        this.setState({firstName}, function(){
            console.log(this.state.firstName)
        })
    }
    changelastName=(event)=>{
        let lastName = event.target.value
        this.setState({lastName}, function(){
            console.log(this.state.lastName)
        })
    }
    changeCountry=(event)=>{
        let country = event.target.value
        this.setState({country}, function(){
            console.log(this.state.country)
        })
    }

    ChangeUser=()=>{
    this.props.ChangeUser(
    this.state.firstName||this.props.userData.name.split(" ")[0],
    this.state.lastName||this.props.userData.name.split(" ")[1],
    this.state.country||this.props.userData.country,
    this.props.userData.email)  
    }

    render(){
     return(
       <div className="popUP">
         first name: <input placeholder={this.props.userData.name.split(" ")[0]} value={this.state.firstName} onChange={this.changeFirstName}></input><hr></hr>
         last name: <input placeholder={this.props.userData.name.split(" ")[1]} value={this.state.lastName} onChange={this.changelastName}></input><hr></hr>
         country: <input placeholder={this.props.userData.country} value={this.state.country} onChange={this.changeCountry}></input> <hr></hr>
          <button className="popButton" onClick={this.ChangeUser}>send!</button>
        </div>
        )
      }
    }

export default Pop;