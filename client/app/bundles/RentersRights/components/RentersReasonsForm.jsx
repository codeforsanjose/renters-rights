import PropTypes from 'prop-types';
import React from 'react';
import RentersHeader from './RentersHeader'

export default class Renters extends React.Component {
  render() {
    return (
      <div className="renters-container">
        <div className="renters-dashboard">
          <RentersHeader />

          <div className="dashboard-container">
            <div className="dashboard-title">
              <h1>Renter's Rights</h1>
            </div>

            <div className="dashboard-text">

              <form className="form-horizontal">
                <h3>How can we help you?</h3>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/> My landlord is evicting me.
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> My landlord refuses to fix something.
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> My landlord is raising my rent.
                  </label>
                </div>

                <br/>
                <h3>Did your landlord give you reasons for evicting you?</h3>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/> Yes
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> No
                  </label>
                  <br/>
                </div>

                <br/>
                <h3>What were their reasons?</h3>
                <h5>Check all that apply</h5>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/> Non-payment of rent
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Violation of lease
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Damage to the apartment
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Refusal to agree to similar or new rental agreement
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Nuisance behavior
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Refusing access to unit
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Illegally sub-leasing to an unapproved tenant
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Substantial rehabilitation of the apartment
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Ellis Act removal
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Owner move-in
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Order to vacate
                  </label>
                  <br/>
                  <label>
                    <input type="checkbox"/> Vacation of unpermitted unit
                  </label>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={this.handleClick}
                  type="submit"
                >
                  Submit
                </button>
              </form>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
