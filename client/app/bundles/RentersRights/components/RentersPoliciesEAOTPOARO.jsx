import React from 'react';
import RentersLayout from './RentersLayout';

export default function RentersPoliciesEAOTPOARO({
  className,
}) {
  return (
    <RentersLayout>
      <div className="content-container">
        <div className="page-header">
          EAO TPO ARO
        </div>

        <div className="row">
           <p>Based on your input, the following San José renter's policies may apply to you. Select the links to learn more: </p>
           <hr/>
           <br/>
           <a href="/rent-increase#menu1">Apartment Rent Ordinance</a><br/>
           <a href="/rent-increase#menu2">Mobile Home Ordinance</a><br/>
           <a href="/rent-increase#menu2">Tenant Protection Ordinance</a><br/>
           <a href="/rent-increase#menu1">Ellis Act Ordinance</a><br/>
        </div>
      </div>

    </RentersLayout>
  )
}
