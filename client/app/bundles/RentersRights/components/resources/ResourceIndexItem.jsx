import React from 'react';

export default class ResourceIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  writeLanguage (string) {
    let displayArr = [];
    let langMap = {
      'english': ' English',
      'spanish': ' Español',
      'chinese': ' 中文',
      'vietnamese': ' Tiếng Việt',
      'tagalog': ' tagalog',
      'russian': ' ру́сский',
      'korean': ' 한국어'
    }

    let split = string.split(', '); 
  
    for (var i=0; i<split.length; i++) {
      let current= split[i];
      if (langMap[current]) displayArr.push( langMap[current] );
    }
  
    return displayArr.toString();
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
        <p>Contact: </p>
        <p>
          <span className="glyphicon glyphicon-globe">
          </span>   Language: {this.writeLanguage(language)}
        </p>
        <p>
          <span className="glyphicon glyphicon-earphone">
          </span>   Phone: {phone}
        </p>
        <p>
          <span style={homeSize}className="glyphicon glyphicon-home">
          </span>  Address: {address}
        </p>
        <p>
          <span className="glyphicon glyphicon-tag">
          </span>   Tags: {category}
        </p>        
      </div>
    )
  }
}
