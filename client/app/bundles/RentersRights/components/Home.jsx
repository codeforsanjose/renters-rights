import React from 'react';
import RentersLayout from './RentersLayout'

  export default class Home extends React.Component {
   render() {
     const { } = this.props;

     return (
       <RentersLayout>
         <div className="content-container">
           <div className="page-header text-center">
             <p>The Code for San Jose's Renter's Rights Guide website is now archived. Our volunteers started the project in 2017, conducting user and stakeholder research to build a user-friendly website for tenants to learn about their rights.</p>
             <p>From 2017-2019, we maintained the website, keeping it up to date with the latest policy changes from the City of San José. </p>
             <p>In January 2020, we decided to archive the website, because the City of San José Housing Department has improved their website user interface</p>
             <p>To learn about San Jose renter's rights, please visit the <a href="http://sanjoseca.gov/rent" rel="noopener">City of San Jose Housing Department's website</a></p>
             <p>Learn more about <a href="https://www.codeforsanjose.com/#projects" rel="noopener">Code for San José projects</a></p>
           </div>
         </div>
         <footer className="renters-footer">
          <div className="content-container">
            <p className="text-center">
              <small>
                Made by <a href="http://www.codeforsanjose.com">Code for San José</a>
              </small>
            </p>
          </div>
        </footer>
       </RentersLayout>
     )
   }
 }
