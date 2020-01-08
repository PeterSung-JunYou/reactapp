import React from "react";

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    console.log("constructor", this.name);
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;

    console.log("nextState", nextState);
    console.log("thisState", this.state);

    this.setState(nextState);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };

    this.props.onCreate(contact);

    this.setState({
      name: "",
      phone: ""
    });

    console.log("this=========", this.ttttisinput);
    console.log("this=========", this);
    this.ttttisinput.focus();
  }

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={ref => {
              this.ttttisinput = ref;
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

ContactCreate.defaultProps = {
  onCreate: () => console.error("onCreate not defined")
};

/* ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
}; */
