import React from "react";

export default class contactInfo extends React.Component {
  render() {
     // if this.props.onClick
    return (
      <div onClick={this.props.onClick}>
        {this.props.contact.name} {/* {this.props.contact.phone} */} 
      </div>
    );
  }
}
