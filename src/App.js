import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo-2.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {/* Navbar Start */}
        <Navbar brand="Navbar" />
        <Navbar brandImage={logo} />
        <Navbar brand="Navbar" brandImage={logo} />
        <Navbar brand="Navbar" data={this.state.data} />
        <Navbar brand="Navbar" data={this.state.data} alignItem="m-auto" />
        <Navbar brand="Navbar" data={this.state.data} alignItem="ml-auto" />
        {/* Navbar End */}
      </div>
    );
  }
}

export default App;
