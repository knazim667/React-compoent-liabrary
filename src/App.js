import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo-2.png";

function App() {
  return (
    <div className="App">
      <Navbar brand="Navbar" />
      <Navbar brandImage={logo} />

      <Navbar brand="Navbar" brandImage={logo} />
    </div>
  );
}

export default App;
