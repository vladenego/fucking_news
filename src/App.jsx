import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from "./Switch"
import News from "./News"

export default class App extends React.Component {
constructor(props){
  super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);

}
handleChange() {
  console.log(this.state.checked);
  this.setState({ checked: !this.state.checked });
  
}

render (){
return (
<div className="App">
  <header className="App-header">
    {console.log("inside: " + this.state.checked)}
    <img src={logo} className="App-logo" alt="logo" />
    {/* {console.log("props:" + this.state.checked)} */}

    {this.state.checked ? <p>
      English
    </p> : <p>Ukrainian</p>
     }

    <Switch 
     checked={this.state.checked}
     onChange={() => this.handleChange()}  />
     <News 
      switchState={this.state.checked}
       />
  </header>


</div>
);
}

}
