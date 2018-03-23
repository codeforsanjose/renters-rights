import React from 'react';

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
        <a href={website}><h3>{organization}</h3></a>
        <p>{description}</p>
        <span>Contact: </span>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    )
  }
}
