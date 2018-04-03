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
             <label className="col-sm-1 col-md-1 col-form-label" htmlFor="street">Street Address:</label>
             <div className="col-sm-8 col-md-8">
               <input
                 className="form-control"
                 name="street"
                 type="text"
                 required="true"
               />
             </div>
             <label className="col-sm-1 col-md-1 col-form-label" htmlFor="aptOrUnit">Apt/Unit:</label>
             <div className="col-sm-2 col-md-2">
               <input
                 className="form-control"
                 name="aptOrUnit"
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
                 name="city"
                 type="text"
               />
             </div>
           </div>

           <h3> How many units are in your building? </h3>
           <div className="form-group row">
             <div className="container radio-buttons">
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     required="true"
                     value="2"
                   />
                   2 units. <em>It is me plus one neighbor.</em>
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     required="true"
                     value="3"
                   />
                   3 units. <em>It is me plus two neighbors.</em>
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     required="true"
                     value="4+"
                   />
                   4 or more. <em> I have more than three neighbors.</em>
                 </label>
               </div>
               <br/>
             </div>
           </div>

           <h3> Approximately when was your building built? </h3>
           <div className="form-group row">
             <div className="container radio-buttons">
               <div className="radio">
                 <label>
                   <input
                     name="yearBuilt"
                     type="radio"
                     required="true"
                     value="before"
                   />
                   Before September 7, 1979
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="yearBuilt"
                     type="radio"
                     required="true"
                     value="after"
                   />
                   After September 7, 1979
                 </label>
               </div>
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
