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
              <div id="collapse1" className="panel-collapse collapse">
                <div className="panel-body">
                We are a group of volunteer developers, desginers and researchers concerned about the housing crisis in Silicon Valley. We are involved with the <a href="http://codeforsanjose.com" target="_blank">San José chapter</a> of <a href="https://www.codeforamerica.org/" target="_blank">Code for America</a>.
                <p>Team:</p>
                <ul>
                  <li> <a href="https://www.linkedin.com/in/yanyinchoy" target="_blank">Yan-Yin Choy, Front End Developer</a></li>
                  <li> <a href="https://www.linkedin.com/in/mking8/" target="_blank">Matthew King, Software Engineer</a></li>
                  <li> <a href="https://www.linkedin.com/in/jliekim/" target="_blank">Julie Kim, UX Researcher & Designer</a></li>
                  <li> <a href="https://www.linkedin.com/in/emilyannramos/" target="_blank">Emily Ramos, UX Researcher</a></li>
                  <li> <a href="https://www.linkedin.com/in/sanazjamloo/" target="_blank">Sanaz Jamloo, Web Developer</a></li>
                  <li> <a href="https://www.linkedin.com/in/lorincamargo/" target="_blank">Lorin Camargo, Urbanist & Designer</a></li>
                  <li> <a href="https://www.linkedin.com/in/jonathan-s-perez-1292a1133/" target="_blank">Jonathan Perez, Council Assistant</a></li>
                  <li> <a href="https://github.com/frangelh" target="_blank">Frangel Alejandro Hernandez Martinez, Android Developer</a></li>
                  <li> <a href="https://www.linkedin.com/in/berry-semexan-71828b60/" target="_blank">Berry Semexan, Developer</a></li>
                  <li> <a href="https://www.linkedin.com/in/tomburns24/" target="_blank">Tom Burns, Developer</a></li>
                </ul>
                <p>Interested in collaborating? Visit our <a href="https://github.com/codeforsanjose/renters-rights" target="_blank">Github page</a> to see current issues, join our <a href="https://slackin-c4sj.herokuapp.com/" target="_blank">Slack channel (#renters_rights)</a> to discuss ideas, issues, and opportunities for collaboration.</p>
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
                  How can I report issues about San Jose rental rights?</a>
                </h3>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                Email <a href="mailto:rrrp@sanjoseca.gov">City of San Jose Rental Rights and Referrals Program</a>.
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
