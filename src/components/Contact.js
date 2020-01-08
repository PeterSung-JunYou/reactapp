import React from "react";
import update from "react-addons-update";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";
import ContactCreate from "./ContactCreate";
//import { render } from "react-dom";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      selectedKey: -1,
      contactData: [
        { name: "Hellen", phone: "010-1234-hell" },
        { name: "Peter", phone: "010-1234-pete" },
        { name: "John", phone: "010-1234-john" },
        { name: "Anastasia", phone: "010-1234-an bas" }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    const contactData = localStorage.contactData;
    if (contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      });
    }
    console.log("componentWillMount", this.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.contactData) !==
      JSON.stringify(this.state.contactData)
    ) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
    console.log(
      "componentDidUpdate",
      'bef-prop:',JSON.stringify(prevProps),
      'aft-prop:',JSON.stringify(this.Props),
      'bef-stat:',JSON.stringify(prevState), 
      'aft-stat:',JSON.stringify(this.state), 
      this.name
    );
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] })
    });
  }

  handleRemove() {
    if (this.state.selectedKey <= -1) {
      return;
    }

    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]]
      }),
      selectedKey: -1
    });
  }

  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone }
        }
      })
    });
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
    console.log("keyword", this.state.keyword);
  }

  handleClick(key) {
    this.setState({
      selectedKey: key
    });
    console.log("selected", key + "," + this.state.selectedKey);
  }

  render() {
    const mapToComponents = data => {
      data.sort(function(a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      data = data.filter(contact => {
        return (
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
        );
      });

      return data.map((contact, i) => {
        return (
          <ContactInfo
            contact={contact}
            key={i}
            onClick={() => this.handleClick(i)}
          />
        );
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey !== -1}
          selectedKey={this.state.selectedKey}
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate} />
      </div>
    );
  }
}
