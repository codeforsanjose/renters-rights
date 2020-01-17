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
            <h1>
              <FormattedMessage
                defaultMessage="Helping renters in San José, California understand the laws and programs in place to protect them."
                id="home.title"
              />
            </h1>
          </div>
          <br/>
          <div className="home-links">
            <div className="col-sm-12 col-md-6">
              <h1>
                <FormattedMessage
                  defaultMessage="How can we help you today?"
                  id="home.subtitle"
                />
              </h1>
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
           <div className="page-header text-center">
             <h1>Know Your Rights as a San José, California Renter</h1>
           </div>
           <div className="row">
              <div className=" col-md-12 text-center">
                <p>
                  <a href="/eviction" className="btn btn-sq-lg btn-eviction">
                    <br/><span className="glyphicon glyphicon-file"></span> <br/>Facing Eviction
                  </a>
                  <a href="/rent-increase" className="btn btn-sq-lg btn-rent-increase">
                    <br/><span className="glyphicon glyphicon-signal"></span> <br/>Handling Rent Increase
                  </a>
                  <a href="/housing-discrimination/" className="btn btn-sq-lg btn-discrimination">
                   <br/><span className="glyphicon glyphicon-home"></span> <br/> Facing Discrimination
                  </a>
                </p>
              </div>
           </div>
         </div>

         <footer className="renters-footer">
          <div className="content-container">
            <p className="text-center">
              <small>
                Made by <a href="http://www.codeforsanjose.com">Code for San José</a>
              </small>
            </p>
          </div>
        </footer>
       </RentersLayout>
     )
   }
 }
