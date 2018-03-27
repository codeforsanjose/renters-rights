import React from 'react';
import RentersLayout from '../RentersLayout'
import { tsvParse } from '../../../../resources/test.js';
import { resources } from '../../../../resources/resources.js';
import ResourceIndexItem from './ResourceIndexItem';
import ResourceFilter from './ResourceFilter';
import EmergencyResource from './EmergencyResource';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'none'
    };

    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleLegalClick = this.handleLegalClick.bind(this);
    this.handleShelterClick = this.handleShelterClick.bind(this);
  }

  handleAllClick(e) {
    e.preventDefault();
    this.setState({filter: 'none'});
  }

  handleLegalClick(e) {
    e.preventDefault();
    this.setState({filter: 'legal'});
  }

  handleShelterClick(e) {
    e.preventDefault();
    this.setState({filter: 'shelter'});
  }

  filterResources() {
    let resourceList = tsvParse(resources);
    let title;

    if (this.state.filter === 'legal') {
      title = 'Legal Information'
      resourceList = resourceList.filter((row) => row.filter_tags === 'Legal/Housing');
    } else if (this.state.filter === 'shelter') {
      title = 'Shelter Information'
      resourceList = resourceList.filter((row) => row.filter_tags === 'Shelter');
    }

    return resourceList;
  }

  findTitle() {
    const { filter } = this.state;
    let title;

    if (filter === 'none') title = 'All Resources';
    if (filter === 'legal') title = 'Legal Information';
    if (filter === 'shelter') title = 'Shelter Information';

    return title;
  }

  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */}
    const resourceList = this.filterResources();
    const filterProps = {
      handleAllClick: this.handleAllClick,
      handleLegalClick: this.handleLegalClick,
      handleShelterClick: this.handleShelterClick,
    };
    const title = this.findTitle();

    return (
      <RentersLayout>
        <div className='content-container'>
          <ResourceFilter {...filterProps} />
          <div className="row">
            <div className="col-md-9">
              <h2>{title}</h2>
              {
                resourceList.map((resource, idx) => (
                  <ResourceIndexItem
                    resource={resource}
                    key={idx}
                    />
                ))
              }
            </div>
            <EmergencyResource />
          </div>
        </div>
      </RentersLayout>
    )
  }
}




// <div className="content-container">
//   <div className="page-header">
//     <h3>
//       Resources
//     </h3>
//   </div>
//   <div className="row">
//     <div className="col-md-9">
//       <p>
//         <a href="/shelter" className="btn btn-sq-lg btn-warning">
//           <br/><span className="glyphicon glyphicon-home"></span> <br/>I Need Shelter
//           </a>
//           <a href="/legal-aid" className="btn btn-sq-lg btn-primary">
//             <br/><span className="glyphicon glyphicon-question-sign"></span> <br/>I Need Legal Help
//             </a>
//           </p>
//         </div>
//         <div className="col-md-3">
//           <p><strong>More questions?</strong></p>
//           <p> Check out <a href="https://www.1degree.org/" target="_blank">One Degree</a> for more resources in San Francisco Bay Area </p>
//         </div>
//       </div>
//     </div>
