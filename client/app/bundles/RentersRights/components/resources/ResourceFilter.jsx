import React from 'react';

export default class ResourceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleAllClick,
      handleLegalClick,
      handleShelterClick,
    } = this.props;

    return(
      <ul className="nav nav-pills">
        <li className="active">
          <a
            data-toggle="pill"
            onClick={handleAllClick}
            href="#menu1"
          >
            All Information
          </a>
        </li>
        <li>
          <a
            data-toggle="pill"
            onClick={handleLegalClick}
            href="#menu2"
          >
            Legal Information
          </a>
        </li>
        <li>
          <a data-toggle="pill"
            onClick={handleShelterClick}
            href="#menu2"
          >
            Shelter Information
          </a>
        </li>
      </ul>
    );
  }
}
