import React from 'react';
import RentersLayout from './RentersLayout'

export default class Renters extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <RentersLayout>
        <div className="dashboard-container">
          <div className="dashboard-text">
            <p> Sorry to hear that your landlord is trying to evict you. Let's figure out whether it was legal.</p>
            <form
              className="form-horizontal"
              method="post"
            >
              <h3> What is your address?</h3>
              <div className="form-group row">
                <label className="col-md-1 col-form-label" htmlFor="streetAddress">Street Address:</label>
                <div className="col-md-8">
                  <input 
                    className="form-control" 
                    type="streetAddress"
                  />
                </div>
                <label className="col-md-1 col-form-label" htmlFor="aptOrUnit">Apt/Unit:</label>
                <div className="col-md-2">
                  <input type="aptOrUnit" className="form-control"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label" htmlFor="city">City:</label>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    name="city"
                    type="text"
                  />
                </div>
                <label className="col-md-1 col-form-label" htmlFor="state">State:</label>
                <div className="col-md-2">
                  <input type="text" className="form-control"/>
                </div>
                <label className="col-md-1 col-form-label" htmlFor="zip">Zip:</label>
                <div className="col-md-3">
                  <input type="text" className="form-control"/>
                </div>
              </div>

              <input
                name="authenticity_token"
                type="hidden"
                value={token}
              />

              <button
                className="btn btn-primary"
                type="submit"
              >
                Get Started
              </button>
            </form>

          </div>
        </div>
      </RentersLayout>      
    )
  }
}
