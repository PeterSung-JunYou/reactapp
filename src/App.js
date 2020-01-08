import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";

class App extends React.Component {
  componentWillMount() {
    console.log("componentWillMount", this.id);
  }
  componentDidMount() {
    console.log("componentDidMount", this.name);
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "componentWillReceiveProps",
      JSON.stringify(nextProps),
      this.name
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      JSON.stringify(nextProps),
      JSON.stringify(nextState),
      this.name
    );
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "componentWillUpdate",
      JSON.stringify(nextProps),
      JSON.stringify(nextState),
      this.name
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      JSON.stringify(prevProps),
      JSON.stringify(prevState),
      this.name
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount", this.name);
  }

  render() {
    return (
      <div className="App">
        <Contact />
        {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
