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
         <form method="post">
           <h3> How many units are in your building? </h3>
           <div className="form-group row">
             <div className="container checkbox">
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="twoUnits"
                   />
                   2 units. <em>It is me plus one neighbor.</em>
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="threeUnits"
                   />
                   3 units. <em>It is me plus two neighbors.</em>
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="totalUnits"
                     type="radio"
                     value="fourOrMore"
                   />
                   4 or more. <em> I have more than three neighbors.</em>
                 </label>
               </div>
               <br/>
             </div>
           </div>

           <h3> Was your building built before September 7, 1979?</h3>
           <div className="form-group row">
             <div className="container checkbox">
               <div className="radio">
                 <label>
                   <input
                     name="yearBuilt"
                     type="radio"
                     value="yes"
                   />
                   Yes, Before September 7, 1979
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input
                     name="yearBuilt"
                     type="radio"
                     value="no"
                   />
                   No, After September 7, 1979
                 </label>
               </div>
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
