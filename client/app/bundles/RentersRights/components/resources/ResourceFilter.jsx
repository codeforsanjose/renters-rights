import React from 'react';

export default class ResourceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;

    return(
      <ul className="nav nav-pills">
        <li className="active">
          <a
            data-toggle="pill"
            onClick={ () => handleClick('none')}
            href="#menu1"
          >
            All Information
          </a>
        </li>
        <li>
          <a
            data-toggle="pill"
            onClick={ () => handleClick('legal')}
            href="#menu2"
          >
            Legal Information
          </a>
        </li>
        <li>
          <a data-toggle="pill"
            onClick={ () => handleClick('shelter')}
            href="#menu2"
          >
            Shelter Information
          </a>
        </li>
      </ul>
    );
  }
}
