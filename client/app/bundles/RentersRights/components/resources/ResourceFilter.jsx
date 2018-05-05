import React from 'react';

export default class ResourceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentActive } = this.props;

    return(
      <div className="container-fluid">
          <div className="row">
          <div>
            <div id="accordion" className="panel panel-default behclick-panel">
              
              <div data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2" className="panel-heading">
                <h3 className="panel-title"> Filter
                </h3>
              </div>

              <div id="collapse2" className="collapse" >
      
                <form>
                  <div className="row">
                      <div className="col-md-6">
                      <div className="panel panel-default"> 
                        <div className="panel-body">
                          <div className="form-group">
                            <label className="control-label"> What are you looking for? </label>
                            <div className="radio">
                              <label>
                                <input type="radio" name="category" value="all" />
                                All
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="category" value="affordable_housing" />
                                Affordable Housing
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="category" value="legal_aid" />
                                Legal Aid
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="category" value="social_service" />
                                Social Service
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="category" value="shelter" />
                                Shelter
                              </label>
                            </div>	        
                          </div>
                        </div>
                      </div>             
                    </div>
                    
                    <div className="col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <div className="form-group">       
                            <label className="control-label">What language?</label>
                            <div className="radio">
                              <label>
                                <input type="radio" name="language" value="all" />
                                All
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="language" value="english" />
                                English
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="spanish" />
                                Español
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="chinese" />
                                中文
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="vietnamese" />
                                Tiếng Việt
                              </label>
                            </div>                            
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="tagalog" />
                                Tagalog
                              </label>
                            </div>                            
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="russian" />
                                ру́сский
                              </label>
                            </div>                            
                            <div className="radio">
                              <label>
                                <input type="radio"  name="language" value="korean" />
                                한국어
                              </label>
                            </div>                            
                          </div>
                        </div>
                      </div>   

                    </div>
                  </div>
        
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
        </div>
      </div>      
    );
  }
}
