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
      <div className="row">
        <div className="col-md-9">
          <a href={website}><h3>{organization}</h3></a>
          <p>{description}</p>
          <span>Contact: </span>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    )
  }
}
