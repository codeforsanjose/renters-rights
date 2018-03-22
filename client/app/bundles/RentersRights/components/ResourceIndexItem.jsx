import React from 'react';
// import Link from "where again?";

// insert FA icons for email, phone, address
export default class ResourceIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      organization,
      phone,
      email,
      website,
      region,
      description,
      address,
    } = this.props.resource;

    return (
      <div>
        <h3>{organization}</h3>
        <h4>{organization}</h4>
        <p>{description}</p>
        <span>Contact: </span>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    )
  }
}
