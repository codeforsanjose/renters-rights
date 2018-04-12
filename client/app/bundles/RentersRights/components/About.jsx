import React from 'react';
import RentersLayout from './RentersLayout'

export default class About extends React.Component {

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
            <h1>About
            </h1>
          </div>

          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  About this website
                  </a>
                </h3>
              </div>
              <div id="collapse1" className="panel-collapse collapse">
                <div className="panel-body">

                We built this website to help inform renters in San José, California to know their rights and learn about local resources. <br/><br/>
                This currently only covers San José, California. This app is not a substitute for legal advice. If you are seeking legal aid, please consult a lawyer immediately. <br/><br/>
                This web app is built by volunteer researchers, designers and developers with <a href="http://www.codeforsanjose.com/" target="_blank">Code for San José</a>, a chapter of <a href="https://www.codeforamerica.org/" target="_blank">Code for America</a>. We built this tool, because we are concerned with the affordable housing crisis in Silicon Valley.
                <br/><br/>
                <p>Renter's Rights Guide Team:</p>
                <ul>
                  <li> <a href="https://www.linkedin.com/in/yanyinchoy" target="_blank">Yan-Yin Choy, Software Engineer</a></li>
                  <li> <a href="https://www.linkedin.com/in/jliekim/" target="_blank">Julie Kim, UX Researcher & Designer</a></li>
                  <li><a href="https://www.linkedin.com/in/dpindrys/" target="_blank">David Pindrys, UX and Product Designer</a></li>
                  <li> <a href="https://www.linkedin.com/in/guy-wassather-678740b7/" target="_blank">Guy Wassather, Software Engineer</a></li>
                  <li> <a href="https://www.linkedin.com/in/aszheng/" target="_blank">Alan Zheng, Software Engineer</a></li>
                  <li> <a href="https://www.linkedin.com/in/chaplonglau/" target="_blank">Chap-Long Lau, Software Engineer</a></li>
                  <li> <a href="https://www.linkedin.com/in/leonardhyman/" target="_blank">Leonard Hyman, Policy Research</a></li>
                  <li> <a href="https://www.linkedin.com/in/kimmyfung/" target="_blank">Kimmy Fung, UX Designer</a></li>
                  <li> <a href="https://www.linkedin.com/in/emilyannramos/" target="_blank">Emily Ramos, UX Researcher</a></li>
                  <li> <a href="https://www.linkedin.com/in/sanazjamloo/" target="_blank">Sanaz Jamloo, Web Developer</a></li>
                </ul>
                <p>Thanks to our previous volunteers: Lorin Camargo, Jonathan Perez, Matthew King, Berry Semexan, Frangel Hernandez, Tom Burns; and to our advisors, Michelle Thong and Vivek Bansal.</p>
                <p>We are grateful for grants from the Awesome Foundation and the Office of San José Mayor Sam Liccardo.</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                   <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                  How You Can Help</a>
                </h3>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                <p><strong>Give Feedback</strong></p>
                <p>Notice an issue or bug with the website? Have feedback to share? Email our <a href="mailto:rentersrightsinfo@gmail.com">team</a>.</p>
                <br/><br/>
                <p><strong>Share with the community</strong></p>
                <p>Share our <a href="https://rentersightsguide.org" target="_blank">tool</a> with the community. If you are sharing on social media, please tag us on Twitter @codeforsanjose and our Facebook Page and include the following hashtags:  #sjrentersrights #cfabrigade.</p>
                <br/><br/>
                <p><strong>Join the team</strong></p>
                <p>Coding skills are not required; research, policy and community outreach skills are helpful. </p>
                <p>Join our <a href="https://slackin-c4sj.herokuapp.com/" target="_blank">Slack channel (#renters_rights)</a> to discuss ideas, issues, and opportunities for collaboration.</p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                  Who can I contact about an eviction?</a>
                </h3>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                Please visit our <a href="/eviction">tenant eviction page</a> to learn more or check out our <a href="/resources/all">resources</a>.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                  How can I report San José rental issues?</a>
                </h3>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>The City of San José Rent Stabilization Program's mission is to oversee the City of San José's apartment and mobilehome Ordinances through education, engagement, and collaboration to build and maintain safe, healthy, and sustainable communities.</p>
                  <br/>
                  <span className="glyphicon glyphicon-earphone"></span> Call: <a href="tel:+4089754480">(408)975-4480</a>
                  <br/>
                  Visit the <a href='http://www.sanjoseca.gov/rent' target='blank'>website</a>
                  <br/>
                  Address: 200 E. Santa Clara St, 12th Floor, San José, CA 95113
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                  Where can I go for help if I live outside of San José?</a>
                </h3>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                <p>To determine if you live within the City of San José jurisdiction or unincorporated Santa Clara County jurisdiction, use the <a href="http://www.sccpropertyinfo.org/" target="_blank">Santa Clara County Online Property Profile search form</a>. City of San José rent stabilization policies  only apply to residents living within the City of San José jurisdiction.</p>
                <br/><br/>
                <p>To find local resources, please refer to our list of <a href="/resources/all">resources</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </RentersLayout>
    )
  }
}
