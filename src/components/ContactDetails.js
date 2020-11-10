import React from "react";
//import ContactCreate from "./ContactCreate";

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      isEdit: false,
      name: "",
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "componentWillReceiveProps",
      JSON.stringify(nextProps),
      this.name
    );
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
  }

  handleKeyPress(e) {
    // enter
    if (e.charCode === 13) {
      this.handleEdit();
    }
  }

  handleToggle() {
    // edit, ok
    if (!this.state.isEdit) {
      this.setState({
        selectedKey: this.props.selectedKey,
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }

    this.setState({ isEdit: !this.state.isEdit });

    console.log(this.state.isEdit);
  }

  handleEdit() {
    // ok, enter...
    this.props.onEdit(this.state.name, this.state.phone);
  }

  render() {
    console.log("props", this.props);
    console.log("State", this.state);
    
    //() => {};
    if (this.state.selectedKey !== this.props.selectedKey) {
      this.setState({
        selectedKey: this.props.selectedKey,
        isEdit: false,
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    }

    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    console.log(details);

    const edit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );

    console.log(edit);

    const view = this.state.isEdit ? (
      <div>
        <input>{this.props.contact.name}</input>
        <input>{this.props.contact.phone}</input>
      </div>
    ) : (
      details
    );

    console.log(view);

    const blank = <div>Not selected</div>;

    return (
      <div>
        <h2 onClick={() => alert("clicked")}>연락처 상세</h2>
        <div>
          {this.props.isSelected ? (this.state.isEdit ? edit : view) : blank}
        </div>
        <p>
          <button onClick={this.handleToggle}>
            {this.state.isEdit ? "확인" : "수정"}
          </button>
          <button onClick={this.props.onRemove}>삭제</button>
        </p>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  selectedKey: -1,
  contact: {
    name: "???",
    phone: "???"
  },

  onRemove: () => console.error("onRemove is not defined"),
  onEdit: () => console.error("onEdit is not defined")
};

/* ContactDetails.propTypes = {
  contact: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func
}; */
