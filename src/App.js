import logo from './happy.png';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    class: "logo "
  }

  handleMouseOver = () => {
    this.setState ({
      class: "logo spin"
    })
  }

  handleMouseOut = () => {
    this.setState ({
      class: "logo "
    })
  }

  render() {

    return(
    <div className="App">
      <header className="App-header">
        <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.state.class === "logo spin" ?
        <h2> MYSELF, AFTER
        THE INTERVIEW WITH YOU: </h2>
        : <h1> Tickle Spongebob </h2>
        }
        <br/><br/>
        <img src={logo} className={this.state.class} alt="logo"/>
        <br/><br/><br/><br/>
        {this.state.class === "logo spin" ?
        <h1> THANK YOU! </h1>
        : null
        }
        </div>
      </header>
    </div>
  )}

}

export default App;
