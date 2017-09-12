import React from 'react';
import RentersLayout from './RentersLayout';

export default class Eviction extends React.Component {

    constructor(props) {
      super(props);

      // const tree = {
      //   type: 'info',
      //   title: 'Tenant receives 3-day, 30-day, 60-day, or 90-day notice to move out.',
      //   nextStep: {
      //     type: 'info',
      //     title: 'Tenant is served "Summons" and "Complaint - Unlawful Detainer".',
      //     nextStep: {
      //       type: 'question',
      //       title: 'Does the tenant file a motion within 5 days?',
      //       options: [
      //         {
      //           title: 'Tenant files motion(s) within 5 days',
      //           nextStep: {
      //             type: 'info',
      //             title: 'Tenant files "Answer" within 5 days',
      //           },
      //         },
      //         {
      //           title: 'Tenant does nothing within 5 days',
      //         },
      //       ],
      //     },
      //   },
      // };

      const allSteps = {
        events: [
          'Tenant receives 3-day, 30-day, 60-day, or 90-day notice to move out.',
          'Tenant is served "Summons" and "Complaint - Unlawful Detainer".',
        ],
        question: 'The tenant has five days to file a motion. Does the tenant file a motion within five days?',
        answers: [
          {
            title: 'Tenant files motion(s) within 5 days',
            nextStep: {
              events: [
                'Tenant files "Answer" within 5 days',
                'Discovery',
                'Landlord files "Request/Counter-Request to Set Case for Trial"',
                'Notice of Hearing',
              ],
              question: 'The trial is held within 20 days. At the trial, the judge or jury will decide in favor of tenant or landlord.',
              answers: [
                {
                  title: 'Judgement for Tenant',
                  nextStep: {
                    events: [
                      'Tenant Stays',
                    ],
                  },
                },
                {
                  title: 'Judgment for Landlord',
                  nextStep: {
                    events: [
                      'Tenant receives Sheriff\'s 5-day eviction notice',
                      'Optional: Tenant files "Motion for Stay of Execution" (to buy more days to stay)',
                      'Sheriff evicts tenant(s)',
                    ],
                  },

                },
              ],
            },
          },
          {
            title: 'Tenant does nothing within 5 days',
            nextStep: {
              events: [
                'Landlord files "Request to Enter Default"',
                'Judgement entered in favor of Landlord',
                'Optional: Tenant files "Motion to Set Aside Default and Default Judgement"',
                'Tenant receives Sheriff\'s 5-day eviction notice',
                'Optional: Tenant files "Motion for Stay of Execution" (to buy more days to stay)',
                'Sheriff evicts tenant(s)'
              ],
            },
          },
        ],
      };

      this.state = {
        allSteps,
        currentStep: allSteps,
        events: allSteps.events,
      }
    }


    handleNext(answer) {
      this.setState({
        currentStep: answer.nextStep,
        events: [
          ...this.state.events,
          // this.state.currentStep.question,
          answer.title,
          ...answer.nextStep.events,
        ],
      });
    }

    handleReset() {
      this.setState({
        currentStep: this.state.allSteps,
        events: this.state.allSteps.events,
      });
    }

    render() {
      const { currentStep, events} = this.state;
      return (
        <RentersLayout>

          <div className="content-container language-paragraph">
            <div className="page-header">
              <h1>Tenant Eviction Process</h1>
            </div>

            <p>This is a simulation of what may happen in the eviction process in the State of California. </p>
            <p>If you are seeking legal aid, please consult a lawyer immediately. </p>

            <div className="container">
              <h3>Eviction Process Timeline in California</h3>
              <table className="table">
                <tbody>
                  {events.map((event, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>



              {currentStep.question && <form>
                <h4><em>{currentStep.question}</em></h4>
                {currentStep.answers.map((answer, i) => (
                  <div
                    className="form-group"
                    key={i}
                  >
                    <button
                      className="btn btn-default"
                      onClick={() => this.handleNext(answer)}
                      type="button"
                    >
                      {answer.title}
                    </button>
                  </div>
                ))}
              </form>}
              {!currentStep.question && <div>
                <p><em>You have reached the end of the simulation of the eviction process in California. To restart the simulation, click Reset.</em></p>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleReset()}
                  type="button"
                >
                  Reset
                </button>
                </div>}
            </div>

            <br/>
            <h4> Special Situations </h4>


                <h3>Tenant Protection Ordinance (TPO)</h3>

                <p>The City of San José Tenant Protection Ordinance (TPO) outlines landlord responsibilities and tenant rights regarding notices to terminate for properties covered by the ordinance. </p>
                <br/>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                        What is covered by TPO?</a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                      <div className="panel-body">
                      <h5>Covered:</h5>
                        <ul>
                          <li>Rent stabilized apartments covered under ARO. Units within Apartments with 3+ units built on or before September 7, 1979</li>
                          <li>Multifamily dwellings with at least 3 units</li>
                          <li>Rental apartments except permitted hotels and motels</li>
                          <li>Guest rooms in any guesthouse and guesthouses</li>
                          <li>Units built without a permit</li>
                        </ul>
                      <h5>Not Covered:</h5>
                        <ul>
                          <li>Duplexes</li>
                          <li>Single-family homes</li>
                          <li>Permitted Second units</li>
                          <li>Single family Condominiums</li>
                          <li>Townhouses</li>
                        </ul>
                      <br/>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                        What does it mean to be covered under TPO?</a>
                      </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                      <div className="panel-body">
                        Buildings are covered by Just Cause and any 30-60-90 day notice to vacate must list one of the 12 just-cause reasons for eviction.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                        What is Just Cause?</a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                      <div className="panel-body">
                      <em> View this information in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112" target="_blank">Spanish</a> or <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113" target="_blank">Vietnamese</a></em>
                      <br/>
                      <p><h5> Under TPO, landlords must include one of the following 12 reasons for termination in any 30-60-90 notice to vacate to the tenant:</h5></p>
                      <li className="list-group-item active"><h4>Just Cause Terminations </h4> <p>The reasons for no-cause notice to vacate that signify fault on the part of the tenant are:</p></li>
                      <li className="list-group-item">1. Nonpayment of rent</li>
                      <li className="list-group-item">2. Material or habitual violation of the lease</li>
                      <li className="list-group-item">3. Substantial damage to the apartment</li>
                      <li className="list-group-item">4. Refusal to agree to a like or new rental agreement</li>
                      <li className="list-group-item">5. Nuisance behavior</li>
                      <li className="list-group-item">6. Refusing access to the apartment, requested in accordance in law</li>
                      <li className="list-group-item">7. Unapproved holdover subtenant</li>
                      <li className="list-group-item active"><h4>No-Fault Just Causes </h4><p>Relocation benefits must be paid when a Tenant is being removed from an apartment for reasons 8-12.</p></li>
                      <li className="list-group-item">8. Substantial rehabilitation of the apartment</li>
                      <li className="list-group-item">9. Ellis Act removal or demolition</li>
                      <li className="list-group-item">10. Owner move-in</li>
                      <li className="list-group-item">11. Order to vacate</li>
                      <li className="list-group-item">12. Leaving an unpermitted apartment</li>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                        No-cause Notice</a>
                      </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                      <div className="panel-body">
                      No-cause notices received after May 10, 2017 are no longer valid. If you have received this and are covered under TPO, please contact the City of San José Rental Rights & Referrals Program at (408)975-4480 to learn about your rights.
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>To learn more, refer to the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a>.</p>
                </div>

            <p>
              Learn more about <a href="http://www.courts.ca.gov/27953.htm" target="_blank">special situations</a>, or <a href="/renters">local ordinances in the City of San José</a>.
            </p>

            <h4> Find Help </h4>
            <ul>
              <li>Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues" target="_blank">legal aid program</a></li>
              <li>Find help from your <a href="http://www.courts.ca.gov/selfhelp-courtresources.htm" target="_blank">court</a></li>
              <li>Refer to our list of <a href="/resources">resources</a> for more information</li>
            </ul>

            <br/>
            <p> To learn more about the Eviction Process in the State of California, visit the <a href="http://www.courts.ca.gov/27798.htm" target="_blank">California Courts</a> website or download
              <a href="http://www.courts.ca.gov/partners/documents/eviction_process_flowchart.pdf" target="_blank">
                <span className="glyphicon glyphicon-download-alt"></span> the Eviction Process PDF.
              </a>
            </p>
          </div>
        </RentersLayout>
      );
    }
}
