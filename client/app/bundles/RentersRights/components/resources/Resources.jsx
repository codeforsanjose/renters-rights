import React from 'react';
import RentersLayout from '../RentersLayout'
import { tsvParse } from '../../../../resources/tsvParser';
import { resources } from '../../../../resources/resources';
import ResourceIndexItem from './ResourceIndexItem';
import ResourceFilter from './ResourceFilter';
import EmergencyResource from './EmergencyResource';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      language: 'all' 
    };
  }

  componentWillMount () {
    var queryParams = Object.keys(this.props.filter); 

    if (queryParams.length > 2) { /* If parameters are present in url query string */
      var category = this.props.filter.category || 'all';
      var language = this.props.filter.language || 'all';
      this.setState({
        category: category,
        language: language
      })
    }
  }

  filterResources() {
    let resourceList = tsvParse(resources);
    
    if (this.state.category !== 'all') {
      var category = this.state.category;
      resourceList = resourceList.filter((row) => row.category.includes(category));
    }

    if (this.state.language !== 'all') {
      var language = this.state.language;
      resourceList = resourceList.filter((row) => row.language.includes(language));
    }

    return resourceList;
  }

  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */}
    let resourceList = this.filterResources();
    let title = 'Resources'
    if (resourceList.length < 1) {
      title = 'No resources available. Please try different filter'
    }

    return (
      <RentersLayout>
        <div className='content-container'>
          <ResourceFilter currentActive={this.state.filter}/>
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
