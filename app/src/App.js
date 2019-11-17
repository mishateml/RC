import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

state = {
  username: 'Your Username',
  show: true
}

intputHandler = (event) =>{
 this.setState({
   username: event.target.value
 });
} 

btnShowOuput = (event) =>{
   this.setState({show:!this.state.show
   });}

  render() {
    return (
      <div className="App">
        <UserInput 
          changed = {this.intputHandler} 
          btnOfOtpt={this.btnShowOuput} 
          val = {this.state.username}/>

        <UserOutput 
          name={this.state.username} 
          show={this.state.show} 
          className="contant" />         
        
      </div>
    );
  }
}

export default App;
