import React from 'react';
import RentersLayout from './RentersLayout'

export default class Shelter extends React.Component {
  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */} 
    const {} = this.props;
    return (
      <RentersLayout>
              <div className="row">
                <div className="col-sm-10 col-md-8"> 
                  <h3>Homeless Resources</h3>

                  <br/>
                  <h5>Housing Helpline</h5>
                  <p>(408) 510-7600	</p>
                  <p>Information on service agencies and housing opportunities for homeless individuals </p>

                  <h4>Homeless Drop In Center</h4>

                  <br/><h5> BILL WILSON CENTER</h5>
                  <p>The Homeless Youth Drop-In Center, located in downtown San Jose, is a safe place where young people can begin to form bonds with caring adults and access essential resources for their overall well-being. The primary goal of the program is to get homeless youth into safe and permanent housing.</p>
                  <p>www.billwilsoncenter.org</p>
                  <p>Phone: 1-408-243-0222</p>

                  <br/><h5> ST. JOSEPH'S CATHEDRAL SOCIAL MINISTRY OFFICE</h5>
                  <p>Offers a safe place for the homeless to receive mail while living in a shelter, phone service available to make appointments and receive messages, sandwiches and something to drink, once a week grocery food bag and referrals to shelter, clothing, housing and community resources.</p>
                  <p>Phone: 1-408-283-8100</p>

                  <br/><h5> COMMUNITY WORKING GROUP - OPPORTUNITY CENTER</h5>
                  <p>Offers drop-in services, showers and laundry facilities, lockers, light snacks, information and referral, transportation assistance, a clothes closet, medical and psychiatric screening and referral, inter-faith chaplaincy, and fellowship.</p>
                  <p>Phone: 650-853-8672</p>

                  <br/><h5> GILROY COMPASSION CENTER</h5>
                  <p>Offers bathroom, resource listings, jackets, clothing, telephone, the internet, laundry, mail, messages, compassion, and respite from the street.</p>
                  <p>Shower, laundry, and medical service available every Thursday starting at 10am and finishing at 12pm. </p>
                  <p>Phone: 1-408-763-7120</p>

                  <br/>
                  <h4>Hot Meals</h4>
                  <br/><h5> CITY OF SAN JOSE DEPARTMENT OF PARKS, RECREATION AND NEIGHBORHOOD SERVICES</h5>
                  <p>Senior Nutrition Program</p>
                  <p>Phone: 408-535-3570</p>

                  <br/><h5> CATHOLIC CHARITIES OF SANTA CLARA COUNTY</h5>
                  <p>Senior Nutrition Program</p>
                  <p>www.ccsj.org</p>
                  <p>Phone: 408-846-0428</p>

                  <br/><h5> PORTUGUESE ORGANIZATION FOR SOCIAL SERVICES AND OPPORTUNITIES</h5>
                  <p>Services include senior nutrition, escorting to doctors visits, translation services, and case management</p>
                  <p>portuguesecenter.org</p>
                  <p>Phone: 1-408-293-0877</p>

                  <br/><h5> MARTHA'S KITCHEN</h5>
                  <p>Provides meals to men, women, and children</p>
                  <p>www.marthas-kitchen.org</p>

                  <br/><h5> YU-AI-KAI</h5>
                  <p>Senior Services</p>
                  <p>www.yuaikai.org</p>
                  <p>Phone: 1-408-294-2505</p>

                  <br/><h5> JTS Northside Senior Community Center</h5>
                  <p>Senior Wellness Program</p>
                  <p>Phone: 1-408-343-7711</p>

                  <br/><h5> ASIAN AMERICANS FOR COMMUNITY INVOLVEMENT OF SANTA CLARA COUNTY, INC</h5>
                  <p>Senior Support Program</p>
                  <p>Phone: 408-975-2730</p>

                  <br/><h5> CITY OF CAMPBELL RECREATION AND COMMUNITY SERVICES</h5>
                  <p>The Lunch Program offers nutritious meals Monday-Friday </p>
                  <p>www.cityofcampbell.com</p>
                  <p>Phone: 1-408-866-2764</p>

                  <br/><h5> CITY OF MILPITAS RECREATION SERVICES DEPARTMENT</h5>
                  <p>Offers a senior nutrition lunch program at the Senior Center</p>
                  <p>Phone: 1-408-586-2425</p>

                  <br/><h5> CITY OF SUNNYVALE COMMUNITY SERVICES</h5>
                  <p>Offers educational, recreational and cultural activities for seniors.</p>
                  <p>Phone: 1-408-730-7360</p>

                  <br/><h5> ST. THOMAS EPISCOPAL CHURCH</h5>
                  <p>Offers hot meals three days a week to hungry people without restriction.</p>
                  <p>www.stthomas-svale.org</p>

                  <br/><h5> COMMUNITY SERVICES AGENCY OF MOUNTAIN VIEW AND LOS ALTOS</h5>
                  <p>Mountain View Senior Nutrition Program</p>
                  <p>www.csacares.org/senior-services</p>
                  <p>Phone: 1-650-964-6586</p>

                  <br/><h5> SECOND HARVEST FOOD BANK OF SANTA CLARA AND SAN MATEO COUNTIES</h5>
                  <p>Food Connection Hotline</p>
                  <p>www.shfb.org</p>


               </div>
                <div className="col-sm-2 col-md-4"> 
                  More questions? Check out <a href="https://www.auntbertha.com/" target="_blank">Aunt Bertha</a>, a resource for finding free or reduced cost services
                </div>
            </div>
      </RentersLayout>
    )
  }
}
