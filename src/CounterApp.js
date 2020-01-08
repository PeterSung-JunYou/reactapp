import React from "react";
import Counter from "./Counter";

class CounterApp extends React.Component {
  render() {
    return <Counter name={this.props.name}>{this.props.children}</Counter>;
  }
}

export default CounterApp;
