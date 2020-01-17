import React from 'react';
import RentersLayout from '../../RentersLayout'
import { tsvParse } from '../../../../../resources/tsvParser';
import { resources } from '../../../../../resources/resources';
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
    let queryParams = Object.keys(this.props.filter); 
    if (queryParams.length >= 2) { /* If parameters are present in url query string */
      let category = this.props.filter.category || 'all';
      let language = this.props.filter.language || 'all';
      this.setState({
        category: category,
        language: language
      })
    }
  }

  filterResources() {
    let resourceList = tsvParse(resources);

    let categoryFilter = this.filter(resourceList, this.state.category, 'category')
    let categoryFilter2 = this.filter(categoryFilter, this.state.language, 'language')
    return categoryFilter2;
  }

  filter (resources, filterWords, filter) {
    if(filterWords.includes('all')) { return resources;} /* Case if there is nothing to filter, return all results */
    
    return resources.filter( (row) => {
      let rowWords;
      if (filter === 'language') { 
        rowWords = row.language.split(',')
      } else if (filter === 'category') { 
        rowWords = row.category.split(',')
      }

      return filterWords.some( (filterWord) => {
        return rowWords.indexOf(filterWord) >=0;
      })
      
    })
  }  

  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */}
    let resourceList = this.filterResources();
    let title = ''
    if (resourceList.length < 1) {
      title = 'No resources available. Please try different filter'
    }

    return (
      <RentersLayout>
        <div className='content-container'>

          <div className="row">
            <div id='resourceFilter' className="col-md-4 collapse in">
                <ResourceFilter checked={this.state}/>
                <EmergencyResource />
            </div>

            <div className="col-md-8">
              <h2>Resources</h2>
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

          </div>
        </div>
      </RentersLayout>
    )
  }
}
