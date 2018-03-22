import React from 'react';
import RentersLayout from './RentersLayout'

export default class AddressCheck extends React.Component {
  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */} 
    const {} = this.props;
    return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
             <h3>
              Address Check
             </h3>
           </div>
          <div className="row">
            <div className="col-md-12">
              <h3> 
                Enter Your Address
              </h3>
              <input id="address-input" type="text" className="form-control" placeholder="Address" />
            </div> 
        </div>
       </div>
     </RentersLayout>
    )
  }
}
