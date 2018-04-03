import React from 'react';
import RentersLayout from './RentersLayout'

export default class RentersTypes extends React.Component {

  render() {

  const {} = this.props;

  return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
          </div>

          <div className="row">
             {/* <p>Your address is #{this.state.street}, #{this.state.city}, #{this.state.state} #{this.state.zip}. You seem to live in a building with #{totalUnits} unit(s) that was built #{this.state.yearBuilt} September 7, 1979. </p> */}
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
}
