import React from 'react';
import RentersLayout from './RentersLayout'

{/* TODO: Styling */}

export default class Shelter extends React.Component {
  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */} 
    const {} = this.props;
    return (
      <RentersLayout>
          <div className="row">
            <div className="col-sm-10 col-md-8"> 
              <p>
              For Immediate Assistance Call Emergency Bed Hotline
              at 1.800.7.SHELTER (1.800.7.743.5837)
              (Spanish/English)
              </p>
              <h3>Shelters for Adults Without Children</h3>
              <p>City Team – Rescue Mission
              408-288-2153
              1174 Old Bayshore Highway, San Jose, CA 95112
              Overnight emergency shelter for men; check-in begins at 5:30 p.m.; first come, first served 

              HomeFirst – Boccardo Reception Center
              408-294-2100
              2011 Little Orchard Street, San Jose, CA 95125
              Emergency shelter for men and women; check-in begins at 3:30 p.m.; first come, first served

              LifeMoves – Georgia Travis House
              408-271-1630
              Shelter for women; call for more information

              LifeMoves – Montgomery Street Inn
              408-271-5160
              358 North Montgomery Street, San Jose, CA  95110
              Emergency shelter for men; program assessments Monday through Friday at 12:30 p.m.

              Salvation Army – Emmanuel House
              408-282-1175
              405 North Fourth Street, San Jose, CA 95112
              Emergency shelter for men; suggested arrival time is between 1:30 p.m. to 2:30 p.m.
              </p> 
              <h3>Shelters for Families With Children</h3>
              <p>Casa de Clara 297.8330
              Call for location
              Temporary shelter for women and women with children.
              InnVision/Commercial Street Inn 271.1630
              260 Commercial Street
              8:30-4:30 Mon-Sun
              Shared housing for women and women with children (boys under 12
              years) - 30 days free, 60 day maximum, monthly bus passes.
              Family Supportive Housing 926.8885
              San José Family Shelter
              1590 Las Plumas Avenue
              Call at 10 Mon-Fri for room availability
              Shelter, comprehensive day services, monthly bus passes. Parents over 18
              and boys up to 17 years. Program fee. 90 day limit. Child care, Head Start
              and on-site tutoring.
              St. Joseph Cathedral Office of Social Ministry
              80 South Market Street 283.8119
              9:30-12 Tues and 1:30-5 Mon-Fri
              Free transitional program for clean, sober, single working women with
              children and men. Must be working steadily during the day. Day bus
              passes available. Call first.
              Catholic Charities 468.0100
              Housing Search and Stabilization 325.5277
              2625 Zanker Road,Suite 201
              8-5 Mon-Fri
              Call for application procedures and appointment times
              Matching program for single parents with children under 12 years.
              Housing search for below market rate apartments and affordable housing.
              City Team-Heritage Home 294.1238
              Emergency shelter for homeless or abandoned pregnant women 18 and
              over during their last trimester of pregnancy. Call intake coordinator. </p>
              <h3>Shelter for Veterans</h3>
              <p>HomeFirst - Veterans Services
408-510-7522
2011 Little Orchard Street, San Jose, CA, 95125

Emergency Shelter and Transitional Housing for veterans; veterans can access first come first served shelter beds (check in at 3:30 p.m.) before being screened for veteran bed eligibility.</p>
            </div>
            <div className="col-sm-2 col-md-4"> 
              More questions? Check out <a href="https://www.auntbertha.com/" target="_blank">Aunt Bertha</a>, a resource for finding free or reduced cost services
            </div>
          </div>
      </RentersLayout>
    )
  }
}
