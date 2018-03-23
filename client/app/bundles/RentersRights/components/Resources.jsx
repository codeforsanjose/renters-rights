import React from 'react';
import RentersLayout from './RentersLayout'
import { tsvParse } from '../../../resources/test.js';
import { resources } from '../../../resources/resources.js';
import ResourceIndexItem from './ResourceIndexItem';

export default class Resources extends React.Component {
  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */}

    const resourceList = tsvParse(resources);

    const {} = this.props;
    return (
      <RentersLayout>
        <div className='content-container'>
          <div className="row">
            <div className="col-md-9">
              {
                resourceList.map((resource, idx) => (
                  <ResourceIndexItem
                    resource={resource}
                    key={idx}
                    />
                ))
              }
            </div>
            <div className="col-md-3">
              <p>For Immediate Assistance:</p>
              <p>Call Emergency Bed Hotline at 1(800)7-SHELTER (1.800.7.743.5837) (Spanish/English)</p>
              <p> More questions? Check out <a href="https://www.1degree.org" target="_blank">One Degree</a> for more resources in the San Francisco Bay Area. </p>
            </div>
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
