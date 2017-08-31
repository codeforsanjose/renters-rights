import React from 'react';
import RentersLayout from './RentersLayout'

export default class FAQ extends React.Component {
  render() {
    const { } = this.props;

    return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
            <h1>Frequently Asked Questions
            </h1>
          </div>

          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  Who is behind this app?
                  </a>
                </h3>
              </div>
              <div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body">
                We are a group of skilled volunteers concerned about the housing crisis in Silicon Valley. We are involved with the <a href="http://codeforsanjose.com" target="_blank">San José chapter</a> of Code for America.
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
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                  How can I contact you directly?</a>
                </h3>
              </div>
              <div id="collapse2" class="panel-collapse collapse">
                <div class="panel-body">
                  <a href="mailto:rentersrightsinfo@gmail.com">Email us</a>.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                  Who can I contact if I am dealing with an emergency situation?</a>
                </h3>
              </div>
              <div id="collapse3" class="panel-collapse collapse">
                <div class="panel-body">
                Please checkout our list of <a href="/resources">resources</a> to learn more about housing and tenant resources.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                  Who can I contact about an eviction?</a>
                </h3>
              </div>
              <div id="collapse4" class="panel-collapse collapse">
                <div class="panel-body">
                Please visit our <a href="/">homepage</a> to learn more or check out our <a href="/resources">resources</a>.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                  Where can I go for help if I live outside of San Jose?</a>
                </h3>
              </div>
              <div id="collapse5" class="panel-collapse collapse">
                <div class="panel-body">
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
