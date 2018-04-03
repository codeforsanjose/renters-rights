// import React from 'react';
// import RentersLayout from './RentersLayout'
//
// {/* TODO: Styling */}
//
// export default class Shelter extends React.Component {
//   render() {
//    {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
//        const { locale } = this.props; */}
//     const {} = this.props;
//     return (
//       <RentersLayout>
//         <div className="content-container">
//           <div className="page-header">
//              <h2>
//               Shelters
//              </h2>
//           </div>
//           <div className="row">
//             <div className="col-md-9">
//               <h3>Shelters for Children Ages 12-17</h3>
//               <hr/>
//               <h4><a href="http://www.billwilsoncenter.org/" target="_blank">Bill Wilson Center</a></h4>
//               <p>
//               Safe Place provides children in danger with a link to immediate help. Safe Place sites, identified by a large yellow and black Safe Place sign, are available to any child who is in danger or feels unsafe. Trained staff and volunteers respond to calls for help 24 hours a day, providing children who are troubled or in danger with a safe haven. Safe Place locations include many schools, community centers, 7/11 Stores, Round Table Pizza, Safeway stores, Taco Bell, fire stations and all public buses and light rails. When help is requested, a call is placed to Bill Wilson Center which sends trained staff and volunteers to respond promptly and provide appropriate help.
//               </p>
//               <p>Call 408-850-6125 for the 24/7 hotline.</p>
//               <p>Call the hotline at 408-850-6125.</p>
//               <p>Address: Bill Wilson Center, 3490 The Alameda, Santa Clara, CA 95050</p>
//
//
//               <h3>Shelters for Families With Children</h3>
//               <hr/>
//               <h4><a href="http://www.nextdoor.org/" target="_blank">Next Door Solutions to Domestic Violence</a></h4>
//               <strong>Find emergency shelter for women and children</strong>
//               <p>Next Door offers a shelter that is open 24 hours a day, 7 days a week. It provides safe housing and crisis counseling for women and their children.</p>
//               <p>Call 408-279-2962</p>
//               <p>Contact the Crisis Hotline.</p>
//               <p>Address: 234 E Gish Rd #200, San Jose, CA 95112</p>
//               <h4><a href="http://casadeclara.org/" target="_blank">Casa de Clara San Jose Catholic Worker</a></h4>
//               <strong>Get temporary shelter for women with and without children</strong>
//               <p>Casa de Clara provides temporary shelter for women with and without children for 6 to 12 months.</p>
//               <p>Call 408-297-8330 for bed availability.</p>
//               <p>Address: African American Community Services Agency, 304 N 6th St, San Jose, CA</p>
//               <h4><a href="http://familysupportivehousing.org/" target="_blank">Family Supportive Housing</a></h4>
//               <p>The San Jose Family Shelter provides 90-day shelter, case management, financial literacy, education support for children and their families. Parents over 18 years old and boys up to 17 years are eligible. Program fee applies.</p>
//               <p>Call 408-926-8885</p>
//               <p>Address: Family Supportive Housing, Inc., 692 N. King Road, San Jose, CA 95133
//               </p>
//               <h4><a href="http://lifemoves.org/the-problem/get-help/santa-clara-county/" target="_blank">LifeMoves | Georgia Travis House</a></h4>
//               <p>Emergency and Transitional Shelter for adults with children under 18</p>
//               <p>Call (408) 271-1630</p>
//               <p>260 Commercial Street San Jose, CA 95112</p>
//               <br/>
//
//               <h3>Shelters for Adults Without Children</h3>
//               <hr/>
//               <h4><a href="https://www.cityteam.org/san-jose/programs/" target="_blank">City Team – Rescue Mission</a></h4>
//               <p>Cityteam San Jose’s shelter is open every single night for men who have no other option but to sleep on the streets. Each night, 57 guests get to come in from the elements to enjoy a hot shower, clean pajamas, a comfortable bed, and three meals. We also provide case management, mentorship, and other essential care.</p>
//               <p>Overnight shelter available for men.</p>
//               <p>5:30pm Check In — First come, first serve each night</p>
//               <p>Shower and meals provided</p>
//               <p>Call 408-288-2153</p>
//               <p> Email: sjrescue@cityteam.org </p>
//               <p>1174 Old Bayshore Highway, San Jose, CA 95112</p>
//               <p>Overnight emergency shelter for men; check-in begins at 5:30 p.m.; first come, first served </p>
//
//               <h4><a href="https://www.homefirstscc.org/our-programs/" target="_blank">HomeFirst – Boccardo Reception Center</a></h4>
//               <p>408-294-2100</p>
//               <p>2011 Little Orchard Street, San Jose, CA 95125</p>
//               <p>Emergency shelter for men and women; check-in begins at 3:30 p.m.; first come, first served</p>
//
//               <h4><a href="http://lifemoves.org/the-problem/get-help/santa-clara-county/" target="_blank">LifeMoves – Georgia Travis House</a></h4>
//               <p>408-271-1630</p>
//               <p>Shelter for women; call for more information</p>
//
//               <h4><a href="http://lifemoves.org/the-problem/get-help/santa-clara-county/" target="_blank">LifeMoves – Montgomery Street Inn</a></h4>
//               <p>408-271-5160</p>
//               <p>358 North Montgomery Street, San Jose, CA  95110</p>
//               <p>Emergency shelter for men; program assessments Monday through Friday at 12:30 p.m.</p>
//
//               <h3>Overnight shelter for men who are homeless</h3>
//               <h4><a href="http://www.salvationarmysiliconvalley.org/santaclara/emmanuel_house" target="_blank">Salvation Army of Silicon Valley</a></h4>
//               <p>The Salvation Army of Silicon Valley provides overnight shelter services all year to men. Dinner and breakfast are provided.</p>
//               <p>AGE: 18 +</p>
//               <p><strong>ELIGIBILITY DESCRIPTION</strong></p>
//               <p>Must have valid California ID and be sober on entry to stay the night.</p>
//               <p><strong>COST-FEES</strong></p>
//               <p>Men receive 14 free nights per year that can be used consecutively or divided up however they like. Afterwards, there is a fee of $5 per night.</p>
//               <p>Call 408-282-1175 for more information.</p>
//               <br/>
//
//               <h3>Shelters for Veterans</h3>
//               <hr/>
//               <h4><a href="https://www.homefirstscc.org/our-programs/" target="_blank">Home First</a></h4>
//               <p>Home First provides housing and housing services to veterans, foster youth and families.</p>
//               <p>The Boccardo Reception Center (BRC) provides shelter for adult men and women. The Center provides meals, shower, laundry, transportation, case management, medical services and mental health counseling.</p>
//               <p>Call 408-539-2100 for more information on services</p>
//               <p>Address: Boccardo Reception Center (BRC), 2011 Little Orchard Street, San Jose, CA 95125</p>
//               <br/>
//             </div>
//             <div className="col-md-3">
//               <p>For Immediate Assistance Call Emergency Bed Hotline at 1(800)7-SHELTER (1.800.7.743.5837) (Spanish/English)</p>
//               <p> More questions? Check out <a href="https://www.1degree.org" target="_blank">One Degree</a> for more resources in San Francisco Bay Area. </p>
//             </div>
//           </div>
//         </div>
//       </RentersLayout>
//     )
//   }
// }
