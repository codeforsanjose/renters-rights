import React from 'react';
import RentersLayout from './RentersLayout'

export default class FAQ extends React.Component {

/*  render() {
    const { locale } = this.props;

    <Renters Layout locale={locale}>
  */ 
  render() {
  
  const {} = this.props;
  
  return (
      <RentersLayout>
        <div className="content-container language-paragraph">
          <div className="page-header">
            <h1>Frequently Asked Questions
            </h1>
          </div>

          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  Who is behind this app?
                  </a>
                </h3>
              </div>
              <div id="collapse1" className="panel-collapse collapse in">
                <div className="panel-body">
                We are a group of volunteer developers, desginers and researchers concerned about the housing crisis in Silicon Valley. We are involved with the <a href="http://codeforsanjose.com" target="_blank">San José chapter</a> of <a href="https://www.codeforamerica.org/" target="_blank">Code for America</a>.
                <p>Team:</p>
                <ul>
                  <li> <a href="https://github.com/ychoy" target="_blank">Yan-Yin Choy, Developer</a></li>
                  <li> <a href="https://github.com/mking" target="_blank">Matthew King, Developer</a></li>
                  <li> <a href="https://github.com/jliekim" target="_blank">Julie Kim, UX Researcher & Designer</a></li>
                  <li> <a href="https://github.com/EngineerEmily" target="_blank">Emily Ramos, UX Researcher</a></li>
                  <li> <a href="https://github.com/sanazjamloo" target="_blank">Sanaz Jamloo, UX Researcher</a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                  Who can I contact about an eviction?</a>
                </h3>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                Please visit our <a href="/eviction">tenant eviction page</a> to learn more or check out our <a href="/resources">resources</a>.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                  How can I report issues about my landlord or renters rights??</a>
                </h3>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                Email <a href="mailto:rrp@sanjoseca.gov">City of San Jose Renter's Rights and Referrals Program</a>.
                </div>
              </div>
            </div>
 
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                  Where can I go for help if I live outside of San Jose?</a>
                </h3>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                Please refer to our list of <a href="/resources">resources</a>.
                </div>
              </div>
            </div>
          </div>
        </div>

      </RentersLayout>
    )
  }
}
