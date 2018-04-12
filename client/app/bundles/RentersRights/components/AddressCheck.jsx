import React from 'react';
import RentersLayout from './RentersLayout'

export default function AddressCheck({
  token,
}) {
  return (
   <RentersLayout>
     <div className="content-container">
       <div className="page-header">
        </div>
       <div className="row">
         <form method="post">
           <h3> What is your address?</h3>
           <div className="form-group row">
             <label className="col-sm-2 col-md-2 col-form-label" htmlFor="street">Street Address:</label>
             <div className="col-sm-10 col-md-10">
               <input
                 className="form-control"
                 name="street"
                 type="text"
                 required="true"
               />
             </div>
           </div>
           <div className="form-group row">
             <label className="col-sm-2 col-md-2 col-form-label" htmlFor="apt">Apartment Number:</label>
             <div className="col-sm-10 col-md-10">
               <input
                 className="form-control"
                 name="apt"
                 placeholder="Enter your apartment or unit number. Don't include the abbreviations 'Apt' or 'Unit'."
                 type="text"
               />
             </div>
           </div>
           <div className="form-group row">
             <label className="col-sm-1 col-md-1 col-form-label" htmlFor="city">City:</label>
             <div className="col-sm-4 col-md-4">
               <input
                 className="form-control"
                 name="city"
                 type="text"
                 required="true"
               />
             </div>
             <label className="col-sm-1 col-md-1 col-form-label" htmlFor="state">State:</label>
             <div className="col-sm-2 col-md-2">
               <input
                 className="form-control"
                 name="state"
                 required="true"
                 type="text"
               />
             </div>
             <label className="col-sm-1 col-md-1 col-form-label" htmlFor="zip">Zip:</label>
             <div className="col-sm-3 col-md-3">
               <input
                 className="form-control"
                 required="true"
                 name="zip"
                 type="text"
               />
             </div>
           </div>

           <input name="authenticity_token" type="hidden" value={token} />
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
  );

}
