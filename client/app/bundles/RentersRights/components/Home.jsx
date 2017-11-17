{/* Locale set up. Remove comment when app is translated.
  import { FormattedMessage } from 'react-intl';
  */} 
import React from 'react';
import RentersLayout from './RentersLayout'

{/* Locale set up. Remove comment when app is translated. 

export default class Home extends React.Component {
    render () { 
    const { locale } = this.props;

    return (
      <RentersLayout locale={locale}>
        <div className="content-container">
          <div className="page-header">
            <h3>
              <FormattedMessage
                defaultMessage="Helping renters in San José, California understand the laws and programs in place to protect them."
                id="home.title"
              />
            </h3>
          </div>
          <br//>
          <div className="home-links">
            <div className="col-sm-12 col-md-6">
              <h3>
                <FormattedMessage
                  defaultMessage="How can we help you today?"
                  id="home.subtitle"
                />
              </h3>
              <div className="list-group">
                <a href={`/${locale}/eviction`} className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">
                    <FormattedMessage
                      defaultMessage="I want to learn about tenant eviction."
                      id="home.eviction"
                    />
                  </h4>
                </a>
              </div>
              <div className="list-group">
                <a href={`/${locale}/renters`} className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">
                    <FormattedMessage
                      defaultMessage="I want to learn about renter's rights."
                      id="home.renters"
                    />
                  </h4>
                </a>
              </div>
               <div className="list-group">
  
                <a href={`/${locale}/resources`} className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">
                    <FormattedMessage
                      defaultMessage="I want to learn about local resources."
                      id="home.resources"
                    />
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RentersLayout>
    */} 

  export default class Home extends React.Component {
   render() {
     const { } = this.props;
 
     return (
       <RentersLayout>
         <div className="content-container">
           <div className="page-header">
             <h3>Helping renters in San José, California understand the laws and programs in place to protect them.
             </h3>
           </div>
           <div className="row">
              <div className="col-sm-6 col-md-12">
                <p>
                  <a href="/eviction" className="btn btn-sq-lg btn-primary">
                    <br/><span className="glyphicon glyphicon-file"></span> <br/>I Am Getting Evicted
                  </a>
                  <a href="/renters" className="btn btn-sq-lg btn-success">
                    <br/><span className="glyphicon glyphicon-signal"></span> <br/>My Rent Is Increasing
                  </a>
                  <a href="/shelter" className="btn btn-sq-lg btn-warning">
                   <br/><span className="glyphicon glyphicon-home"></span> <br/>  I Need Shelter
                  </a>
                  <a href="#" className="btn btn-sq-lg btn-info">
                    <br/><span className="glyphicon glyphicon-pencil"></span> <br/>I Want To Report An Issue
                  </a>
                  <a href="/renters" className="btn btn-sq-lg btn-warning">
                    <br/><span className="glyphicon glyphicon-map-marker"></span> <br/>Do I Live Within San Jose?
                  </a>
                  <a href="/legalaid" className="btn btn-sq-lg btn-primary">
                    <br/><span className="glyphicon glyphicon-question-sign"></span> <br/>I Need Legal Help
                  </a>
                </p>
              </div>
           </div>
         </div>
       </RentersLayout>
     )
   }
 }
