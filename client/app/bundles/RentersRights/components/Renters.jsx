import React from 'react';
import RentersLayout from './RentersLayout'

export default class Renters extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <RentersLayout>
        <div className="dashboard-container">
          <div className="dashboard-text">
            <p> Get started by completing the form below </p>
            <form
              className="form-horizontal"
              method="post"
            >
              <h3> What is your address?</h3>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address:</label>
                <input type="streetAddress" className="form-control"/>
              </div>
              <br/>
              <div className="form-group">
                <label htmlFor="aptOrUnit">Apt/Unit:</label>
                <input type="aptOrUnit" className="form-control"/>
              </div>
              <br/>
              <div className="form-group row">
                <label className="col-1 col-form-label" htmlFor="city">City:</label>
                <div className="col-4">
                  <input
                    className="form-control"
                    name="city"
                    type="text"
                  />
                </div>
                <label className="col-1 col-form-label" htmlFor="state">State:</label>
                <div className="col-2">
                  <input type="text" className="form-control"/>
                </div>
                <label className="col-1 col-form-label" htmlFor="zip">Zip:</label>
                <div className="col-2">
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
