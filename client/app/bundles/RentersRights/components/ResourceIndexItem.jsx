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
        <p>Contact: </p>
        <p><span className="glyphicon glyphicon-earphone"></span>   Phone: {phone}</p>
        <p><span className="glyphicon glyphicon-home"></span>  Address: {address}</p>
      </div>
    )
  }
}
