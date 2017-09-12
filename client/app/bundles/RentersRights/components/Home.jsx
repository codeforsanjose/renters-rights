import React from 'react';
import RentersLayout from './RentersLayout'

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
          <br/>
          <div className="home-links">
            <div className="col-sm-12 col-md-6">
              <h3> How can we help you today? </h3>
              <div className="list-group">
                <a href="/eviction" className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">I want to learn about tenant eviction.</h4>
                </a>
              </div>
              <div className="list-group">
                <a href="/renters" className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">I want to learn about renter's rights.</h4>
                </a>
              </div>
               <div className="list-group">
                <a href="/resources" className="list-group-item list-group-item-danger">
                  <h4 className="list-group-item-heading">I want to learn about local resources.</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RentersLayout>
    )
  }
}
