import React from 'react';
import RentersLayout from './RentersLayout'

export default function HelpTypeForm({
  token,
}) {
  return (
    <RentersLayout>
      <form
        method="post"
      >
        <h3>How can we help you?</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" name="evict" type="checkbox"/> My landlord is evicting me.
          </label>
          <br/>
          <label className="form-check-label">
            <input className="form-check-input" name="repair" type="checkbox"/> My landlord refuses to fix something.
          </label>
          <br/>
          <label className="form-check-label">
            <input className="form-check-input" name="rent" type="checkbox"/> My landlord is raising my rent.
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
