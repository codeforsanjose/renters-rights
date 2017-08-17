import React from 'react';
import RentersLayout from './RentersLayout'

export default function RentersTypeForm({
  token,
}) {
  return (
    <RentersLayout className="renters-container">
      <div className="home-links">
        <div className="container">
          <form
            className="form-horizontal"
            method="post"
          >
            <h3>What type of home do you rent?</h3>
            <div className="checkbox" required="true">
              <label>
                <input name="rentalType" type="radio" value=""/> Single Family Home
              </label>
              <br/>
              <label>
                <input name="rentalType" type="radio" value="duplex"/> Duplex 
              </label>
              <br/>
              <label>
                <input name="rentalType" type="radio" value="triplex"/> Triplex
              </label>
              <br/>
              <label>
                <input name="rentalType" type="radio" value="quadruplex"/> Quadruplex
              </label>
              <br/>
              <label>
                <input name="rentalType" type="radio" value="apt3Plut"/> Apartment with 3+ units in the building 
              </label>
              <br/>
              <label>
                input name="rentalType" type="radio" value="apt1To2"/> Apartment with 1-2 units in the building 
              </label>
              <br/>
              <label>
                <input name="rentalType" type="radio" value="mobileHome"/> Mobile Home 
              </label>
              <br/>
            </div>
              
            <h3>Do you live in an unpermitted dwelling? </h3>
            <em>Unpermitted dwelling means part  or parts of a structure that are being rented as a home, residence, or sleeping place, where the use is not
authorized, permitted, or otherwise approved by the City</em>
            <br/>
            <div className="checkbox" required="true">
              <label>
                <input name="unpermitted" type="radio" value="yes"/> Yes
              </label>
              <br/>
              <label>
                <input name="unpermitted" type="radio" value="no"/> No
              </label>
              <br/>
            </div>
    
            <br/>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>   
          </form>
        </div>
      </div>
    </RentersLayout>
  )
}
