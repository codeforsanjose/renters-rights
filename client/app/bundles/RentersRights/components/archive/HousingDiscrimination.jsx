import React from 'react';
import RentersLayout from '../RentersLayout'

export default class HousingDiscrimination extends React.Component {

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
            <h1>Housing Discrimination</h1>
          </div>
          <h2>Federal and California state laws protect renters and home buyers from discrimination. </h2>
          <p>These laws have been in place since the 1960’s.</p>
          <p>In California, no person or entity with control over your housing can discriminate against you based on the following characteristics:</p>
          <ul>
            <li>Race/Color</li>
            <li>National Origin (Ethnicity)</li>
            <li>Religion</li>
            <li>Sex</li>
            <li>Disability</li>
            <li>Familial Status</li>
            <li>Sexual Orientation (CA State Law)</li>
            <li>Gender Identity & Expression (CA State Law)</li>
            <li>Marital Status (CA State Law)</li>
            <li>Source of Income (CA State Law)</li>
            <li>Age (CA State Law)</li>
            <li>Arbitrary Characteristics (CA State Law)</li>
          </ul>
          <h2>Who do these laws apply to?</h2>
            <blockquote class="blockquote">
              <p class="mb-0">“The Federal housing discrimination laws cover most housing, with a few exceptions...California law, however, covers almost every type of housing and housing provider imaginable.”  - Project Sentinel</p>
            </blockquote>
            <p>In the past, housing discrimination laws have applied to the following people and entities:</p>
            <ul>
              <li>Property owners</li>
              <li>Managers</li>
              <li>Maintenance staff</li>
              <li>Real estate brokers and agents</li>
              <li>Homeowners associations</li>
              <li>Mobile home parks</li>
              <li>Local housing authorities and governments</li>
              <li>Hotels</li>
              <li>Motels</li>
              <li>Vacation rentals</li> 
              <li>Homeless shelters</li>
            </ul>
            <h2>Housing Discrimination is...</h2>
            <ul>
              <li>A resident manager only allowing families with children to live in certain buildings.</li>
              <li>A landlord evicts a white tenant from her mobile home because her black friends visit her there.</li>
              <li>A newspaper ad says that housing is available only for white applicants.</li>
              <li>A property manager refuses to rent an apartment to a single woman, but he will rent the apartment to a single man.</li>
            </ul>
            <h2>Housing discrimination is not...</h2>
            <ul>
              <li>A bank denying you a mortgage because you have poor credit.</li>
              <li>A housing provider can refuse to rent to you because you are low-income.</li>
              <li>A landlord refuses to rent to you because you have an eviction on your record.</li>
            </ul>
            <p>These things may not be fair, but they aren’t illegal.</p>
            <h2>Do you believe you are the target of housing discrimination?</h2>
            <p>Contact <a href="http://housing.org/" target="_blank">Project Sentinel</a> at (800) 855-7100 </p>
            <a href="http://housing.org/fair-housing/fair-housing-events/" target="_blank">Take a Fair Housing Workshop</a> <br />
            <a href="http://housing.org/fair-housing/file-a-fair-housing-complaint/" target="_blank">File a Fair Housing Complaint</a><br />
            <a href="https://baylegal.org/" target="_blank">Bay Area Legal Aid</a> <br />
            <a href="http://www.lawfoundation.org/" target="_blank">Law Foundation of Silicon Valley</a>
        </div>
      </RentersLayout>
    )
  }
}
