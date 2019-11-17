import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

state = {
  username: 'Your Username'
}

intputHandler = (event) =>{
 this.setState({
   username: event.target.value
 });

}

  render() {
    return (
      <div className="App">
        <UserInput changed = {this.intputHandler} val = {this.state.username}/>
        <UserOutput name={this.state.username} className="contant" />
        
        
      </div>
    );
  }
}

export default App;
