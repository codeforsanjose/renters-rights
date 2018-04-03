import React from 'react';

export default class ResourceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, currentActive } = this.props;
    return(
      <ul className="nav nav-pills">
        <li className= {currentActive === 'all' ? "active" : "inactive"}>
          <a
            data-toggle="pill"
            onClick={ () => handleClick('all')}
            href="#menu1"
          >
            All Information
          </a>
        </li>
        <li className= {currentActive === 'legal' ? "active" : "inactive"}>
          <a
            data-toggle="pill"
            onClick={ () => handleClick('legal')}
            href="#menu2"
          >
            Legal Information
          </a>
        </li>
        <li className= {currentActive === 'shelter' ? "active" : "inactive"}>
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
