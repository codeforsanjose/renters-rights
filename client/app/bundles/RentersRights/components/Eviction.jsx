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
        question: 'Does the tenant file a motion within 5 days?',
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
              question: 'Is the trial held within 20 days?',
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
                  title: 'Judgement for Landlord',
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
                'Sheriff evicts tenant(s)',
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

          <div className="content-container">
            <div className="page-header">
              <h1>Tenant Eviction Process</h1>
            </div>

            <p>
              Select one of the buttons below to walk through the eviction process in the State of California.
            </p>
            <p> You can see the timeline of events on the right.
            </p>

            <div className="row">

              <div className="col-md-6">
                {currentStep.question && <form>
                  <h4>{currentStep.question}</h4>
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
                  <p>
                    See the Eviction Process Timeline on the right.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleReset()}
                    type="button"
                  >
                    Reset
                  </button>
                </div>}
              </div>
              <div className="col-md-6">
                <h4>Timeline</h4>
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
              </div>
            </div>

            <br/>
            <h4> Special Situations </h4>
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
            <p> To learn more about the Eviction Process in the State of California, visit the <a href="http://www.courts.ca.gov/27798.htm" target="_blank">California Courts</a> website.</p>


              <a href="http://www.courts.ca.gov/partners/documents/eviction_process_flowchart.pdf">
                <span className="glyphicon glyphicon-download-alt"></span> Download Eviction Process PDF
              </a>

          </div>
        </RentersLayout>
      );
    }
}
