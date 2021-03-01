import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo-2.png";
import Button from "./components/Button";
import { youtube } from "react-icons-kit/feather/youtube";

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
    const { data } = this.state;
    return (
      <div className="App">
        {/* Navbar Start */}
        <Navbar brand="Navbar" />
        <Navbar brandImage={logo} />
        <Navbar brand="Navbar" brandImage={logo} />
        <Navbar brand="Navbar" data={data} />
        <Navbar brand="Navbar" data={data} alignItem="m-auto" />
        <Navbar brand="Navbar" data={data} alignItem="ml-auto" />
        {/* Navbar End */}
        {/* Button Component Start */}
        <div className="container">
          <Button
            icon={youtube}
            iconPosition="left"
            customClass="btn-success mr-3"
            title={"Success"}
          />
          <Button customClass="btn-primary" title={"Primary"} />
        </div>
      </div>
    );
  }
}

export default App;
