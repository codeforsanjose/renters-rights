import React from 'react';
import RentersLayout from './RentersLayout'

export default class Resources extends React.Component {
  render() {
    const { locale } = this.props;

    return (
      <RentersLayout locale={locale}>
        <div className="content-container language-paragraph">
          <div className="dashboard-container">
            <div className="dashboard-text">
              <div className="page-header">
                <h1>Resources</h1>
              </div>

              <ul className="nav nav-pills">
                <li className="active"><a data-toggle="pill" href="#menu1">Legal Resources</a></li>
                <li><a data-toggle="pill" href="#menu2">Homeless Resources</a></li>
                <li><a data-toggle="pill" href="#menu3">Housing Resources</a></li>
              </ul>


              <div className="tab-content">
                <div id="menu1" className="tab-pane fade in active">
                  <h3>Legal Resources </h3>


                  <br/><h5>Tenants Together</h5>
                  <p>(888) 495 8020</p>
                  <p>Provides tenant counseling over the phone to tenants across the state certain days of the week</p>

                  <br/><h5>Law Foundation of Silicon Valley - Volunteer Eviction Assistance Clinic</h5>
                  <p>(408) 280-2424</p>
                  <p>Provides limited assistance to Santa Clara County tenants facing eviction</p>

                  <br/><h5>Law Foundation of Silicon Valley - Fair Housing Law Project</h5>
                  <p>(408) 280-2452</p>
                  <p>Provides free legal representation to victims of housing discrimination</p>

                  <br/><h5>Law Foundation of Silicon Valley - Mental Health Advocacy Project</h5>
                  <p>(408) 280-2420</p>
                  <p>Provides free legal representation to mental health and developmental services consumers who have housing problems</p>

                  <br/><h5>Law Foundation of Silicon Valley - Health Legal Services</h5>
                  <p>(408) 280-2430</p>
                  <p>Provides free legal representation to individuals with HIV/AIDS or diabetes who have housing problems</p>

                  <br/><h5>Project Sentinel</h5>
                  <p>1-888-331-3332</p>
                  <p>Provides a variety of services (including mediation services) and advice regarding landlord-tenant problems in some jurisdictions.  Investigates claims of housing discrimination.</p>

                  <br/><h5>Bay Area Legal Aid</h5>
                  <p>(408) 850-7066</p>
                  <p>Provides free legal representation to low-income tenants with housing problems</p>

                  <br/><h5>Asian Law Alliance</h5>
                  <p>(408) 287-9710</p>
                  <p>Provides free legal representation to tenants with housing problems</p>

                  <br/><h5>Pro Bono Project Lawyers in the Library</h5>
                  <p>(408) 808-2382</p>
                  <p>Provides free 20-minute legal consultation on a variety of legal matters</p>

                  <br/>
                  <h4>Santa Clara County</h4>
                  <h5>SCC Department of Human Relations, Dispute Resolution Services</h5>
                  <p>(408) 792-2314</p>
                  <p>Provides low cost neutral-third-party dispute resolution services between tenants and landlords, tenants and other tenants, and neighbors.</p>

                  <br/><h5>California Department of Fair Employment and Housing</h5>
                  <p>1-800-233-3212	</p>
                  <p>State agency responsible for taking complaints of housing discrimination</p>

                  <br/><h5>City of San José - Rental Rights & Referral Program</h5>
                  <p>(408)975-4480</p>
                  <p>Rent increases and service reductions in mobilehomes and most tri-plex and larger buildings built before 9/7/79</p>

                  <br/><h5>City of San José - Code Enforcement</h5>
                  <p>(408)535-7770</p>
                  <p>Enforces Housing Code and other City code</p>

                  <br/><h5>Senior Adult Legal Assistance</h5>
                  <p>(408)295-5991</p>
                  <p>Legal assistance for individuals 60+ years old</p>

                  <br/><h5>Santa Clara County Bar Association Lawyer Referral</h5>
                  <p>(408)287-2557</p>
                  <p>Referrals to private attorneys (commercial rent disputes, other legal problems)</p>

                  <br/><h5>Volunteer Eviction Assistance</h5>
                  <p>(408) 280-2424</p>
                  <p>Short-term pro-bono assistance with eviction complaints Fridays by appointment.</p>

                  <br/><h5>Palo Alto Mediation Service</h5>
                  <p>(650) 856-4062</p>
                  <p>Information, counseling and mediation</p>

                  <br/><h5>Los Gatos Information and Referral Services</h5>
                  <p>(408)243-8565</p>
                  <p>Information, counseling and mediation Apartment and mobilehome rent control</p>

                  <br/><h5>Los Altos Mediation Program</h5>
                  <p>(650) 949-5267</p>
                  <p>Information and mediation</p>

                  <br/>
                  <h4> San Mateo County </h4>
                  <h5>Community Legal Services East Palo Alto</h5>
                  <p>650-326-6440</p>
                  <p>Provides free legal aid to tenants</p>

                </div>

                <div id="menu2" className="tab-pane">
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
                <div id="menu3" className="tab-pane">
                  <h3>Housing Resources</h3>
                  <div className="list-group">
                    <p className="list-group-item-text">
                    <a href="www.sjhousing.org">The City of San José Housing Department</a>- Serving San José's lower- and moderate-income families by increasing, preserving, and improving housing that is affordable and livable, and to the extent possible, ensuring long-term affordability and contributing to neighborhood revitalization.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a href="http://www.hacsc.org/">Housing Authority of Santa Clara County (HACS)</a> - Provides rental subsidies and develops affordable housing for low income families, seniors and persons with disabilities living in Santa Clara County, California, the heart of Silicon Valley.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a href="http://www.211bayarea.org/">211SCC</a> - Searchable database of health and human service providers in Santa Clara County.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a ref="https://www.housingca.org/">Housing Califorrnia</a> - Mission is to prevent homelessness and increase the supply of decent, safe, accessible and permanently affordable homes for homeless low-income Californians.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a href="http://www.housingchoices.org/">Housing Choices Coalition</a> - Housing Choices creates and implements innovative strategies to provide quality living options for people with developmental disabilities in Santa Clara County.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a href="https://portal.hud.gov/hudportal/HUD">U.S. Dept. of Housing and Urban Development</a> - HUD's mission is to create strong, sustainable, inclusive communities and quality affordable homes for all.   
                    </p>
                    <br/>
                    <p className="list-group-item-text">
                    <a href="https://portal.hud.gov/hudportal/HUD?src=/program_offices/housing/mfh">U.S. Dept. of Housing and Urban Development Multifamily Housing</a> - This inventory is designed to assist prospective applicants with locating units in HUD insured and HUD subsidized multifamily properties that serve the elderly and/or persons with disabilities. 
                    </p>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <p>To find more resources in the Bay Area, visit <a href="http://www.211bayarea.org/" target="_blank">United Way Bay Area 211</a>.</p>

            </div>
          </div>
        </div>
      </RentersLayout>
    )
  }
}
