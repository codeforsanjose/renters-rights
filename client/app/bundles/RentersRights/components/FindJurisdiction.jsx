import React from 'react';
import RentersLayout from './RentersLayout'

export default class FindJurisdiciton extends React.Component {

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
            <h1>Determine If You Live Within San José limits </h1>
          </div>
          <p>To determine if you live within the City of San José jurisdiction, use the <a href="http://www.sccpropertyinfo.org/" target="_blank">Santa Clara County Online Property Profile search form</a>.</p>
        </div>
      </RentersLayout>
    )
  }
}
