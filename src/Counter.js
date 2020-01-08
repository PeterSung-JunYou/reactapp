import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      value: 0,
      string: "string" // bound...
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1,
      string: this.state.string + this.state.value
    });
    console.log(this.state);
  }

  render() {
    let handleClick = "string"; //bound...
    console.log(this.handleClick);
    console.log(handleClick);
    //this.handleClick = this.handleClick.bind(this);
    return (
      <div>
        <h2>{this.state.string}</h2>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
        <h3>{this.props.name}</h3>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

export default Counter;
