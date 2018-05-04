import React from 'react';

export default class ResourceIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      geo,
      organization,
      phone,
      email,
      website,
      language,
      category,
      description,
      address,
    } = this.props.resource;
    const homeSize = {fontSize: '2px'}; // for some reason is default to 750%

    return (
      <div>
        <a href={website} target="_blank">
          <h3>{organization}</h3>
        </a>
        <p>{description}</p>
        <p>{geo}</p>
        <p>Contact: </p>
        <p>
          <span className="glyphicon glyphicon-globe">
          </span>   Language: {language}
        </p>
        <p>
          <span className="glyphicon glyphicon-earphone">
          </span>   Phone: {phone}
        </p>
        <p>
          <span style={homeSize}className="glyphicon glyphicon-home">
          </span>  Address: {address}
        </p>
        <p>Tags:</p>        
        <p>{category}</p>        
      </div>
    )
  }
}
