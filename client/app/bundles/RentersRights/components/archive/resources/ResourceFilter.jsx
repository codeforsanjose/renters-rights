import React from 'react';
import ResourceFilterList from './ResourceFilterList';

export default class ResourceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let categoryListValues = 
    [{value:'legal_aid', displayName: 'Legal Aid'},
      {value: 'affordable_housing', displayName : 'Affordable Housing'},      
      {value:'social_service', displayName: 'Social Service'},
      {value:'shelter', displayName: 'Shelter'}
    ]
    let languageListValues = 
    [{value: 'english', displayName : 'English'},
      {value:'spanish', displayName: 'Español'},
      {value:'vietnamese', displayName: 'Tiếng Việt'},      
      {value:'chinese', displayName: '中文'},
      {value:'tagalog', displayName: 'Tagalog'},
      {value:'russian', displayName: 'ру́сский'},
      {value:'korean', displayName: '한국어'}
    ]
    let languageInfo = {
      type: 'language[]', 
      heading: 'What language?',
    }
    var categoryInfo = {
      type: 'category[]',
      heading: 'What are you looking for?',
    }    
    
    return(
      <div className="container-fluid">
          <div className="row">
            <h2>Filter:</h2>
            <div className="panel panel-default">
                <form>
                  <ResourceFilterList info={categoryInfo} listValues={categoryListValues} checked={this.props.checked.category}/>
                  <ResourceFilterList info={languageInfo} listValues={languageListValues} checked={this.props.checked.language}/>                  
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                      <div className="form-group"> 
                        <button className="btn btn-primary btn-block " type="submit">Submit</button>
                      </div>
                    </div>
                  </div>              
              </form>              
            </div>

        </div>
      </div>      
    );
  }
}
