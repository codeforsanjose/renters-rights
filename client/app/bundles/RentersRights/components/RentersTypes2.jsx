import React from 'react';
import RentersLayout from './RentersLayout';

export default function RentersTypes2({
  className,
}) {
  return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
          </div>

          <div className="row">
             {/* <p>Your address is #{this.state.street}, #{this.state.city}, #{this.state.state} #{this.state.zip}. You seem to live in a building with #{totalUnits} unit(s) that was built #{this.state.yearBuilt} September 7, 1979. </p> */}
             <p>Based on your input, it looks like you might live in a building  with 3+ units that was built before September 7, 1979 in San José, California. If this seems accurate, the following policies may affect you. Learn more:</p>
             <hr/>
             <br/>
             <a href="/rent-increase#menu1">Apartment Rent Ordinance</a><br/>
             <a href="/rent-increase#menu2">Tenant Protection Ordinance</a><br/>
          </div>
        </div>

      </RentersLayout>
    )
  }
