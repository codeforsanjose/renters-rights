import React from 'react';
import RentersLayout from './RentersLayout'

export default function RentersReasonsForm({
  token,
}) {
  return (
    <RentersLayout className="renters-container">
        <form
          className="form-horizontal"
          method="post"
        >
          <h3>Did your landlord give you reasons for evicting you?</h3>
          <div className="checkbox">
            <label>
              <input name="gavereason" type="radio" value="yes"/> Yes
            </label>
            <br/>
            <label>
              <input name="gavereason" type="radio" value="no"/> No
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
              <input name="ownermovein" type="checkbox"/> Owner move-in
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

          <input name="authenticity_token" type="hidden" value={token} />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
    </RentersLayout>
  )
}
