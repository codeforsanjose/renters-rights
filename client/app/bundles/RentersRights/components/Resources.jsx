import React from 'react';
import RentersLayout from './RentersLayout'

export default class Resources extends React.Component {
  render() {
   {/* locale setup - remove comment when app translation is ready. Also add locale={locale} to RentersLayout below
       const { locale } = this.props; */} 
    const {} = this.props;
    return (
      <RentersLayout>
      <p> Shelters placeholder </p>
      <p> Legal Aid placeholder </p> 
      <div className="col-sm-2 col-md-4">
      More questions? Check out <a href="https://www.auntbertha.com/" target="_blank">Aunt Bertha</a>, a resource for finding free or reduced cost services
      </div>
      </RentersLayout>
    )
  }
}
