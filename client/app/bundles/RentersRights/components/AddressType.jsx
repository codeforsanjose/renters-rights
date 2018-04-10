import React from 'react';
import RentersLayout from './RentersLayout'

export default function AddressType({
  token,
}) {
  return (
   <RentersLayout>
     <div className="content-container">
       <div className="page-header">
       </div>
       <div className="row">
         <form
           className="form-horizontal"
           method="post">
           <h3> How many units are in your building? </h3>
           <div className="form-group row">
             <div className="checkbox" required="true">
                <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="oneUnit"
                   />
                   1 unit
                 </label>


                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="twoUnits"
                   />
                   2 units
                 </label>

                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="threeUnits"
                   />
                   3 units
                 </label>

                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="fourOrMore"
                   />
                   4 or more units
                 </label>

               <br/>
             </div>
           </div>

           <h3> Do you live in any of the following types of home?</h3>
           <div className="form-group row">
             <div className="checkbox">
                 <label>
                   <input
                     name="typeOfHome"
                     type="radio"
                     value="guestRoom"
                   />
                   Guest Room
                 </label>

                 <label>
                   <input
                     name="typeOfHome"
                     type="radio"
                     value="guestHouse"
                   />
                   Guest House
                 </label>

                 <label>
                   <input
                     name="typeOfHome"
                     type="radio"
                     value="unpermittedUnit"
                   />
                   Unpermitted Unit: a structure or parts of a structure that are being rented as a home, residence, or sleeping place, where the use is not authorized, permitted, or otherwise approved by the City of San Jose
                 </label>

             </div>
           </div>
           <input name="authenticity_token" type="hidden" value={token} />
           <button
             className="btn btn-primary"
             type="submit"
           >
             Continue
           </button>
         </form>
       </div>
     </div>

  </RentersLayout>
  );

}
