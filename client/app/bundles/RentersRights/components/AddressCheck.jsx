import React from 'react';
import RentersLayout from './RentersLayout'

export default class AddressCheck extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       street: '',
       aptOrUnit: '',
       state: '',
       city: '',
       zip: '',
     }

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({
       street: event.target.street,
       aptOrUnit: event.target.aptOrUnit,
       state: event.target.state,
       city: event.target.city,
       zip: event.target.zip,
     });
   }

   handleSubmit(event) {
     console.log(this.state.street);
     console.log(this.state.city);
     alert('A street was submitted: ' + this.state.street );
     event.preventDefault();
   }


  addressCheck(key,address,citystatezip) {

    key="X1-ZWz18q9c4vs1e3_af1tq";
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}";
    $.getJSON(url);

  }

  /*
  componentDidMount() {
    this.Address();
  }

  Address() {
    $.getJSON('https://randomuser.me/api/')
      .then(({ results }) => this.setState({ person: results }));
  }

  */
  render(){


    return (
      <RentersLayout>
        <div className="content-container">
          <div className="page-header">
             <h3>
              Address Check
             </h3>
           </div>

          <div className="container">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <h3> What is your address?</h3>
                <div className="form-group row">
                  <label className="col-md-1 col-form-label" htmlFor="street">Street Address:</label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      value={this.state.street}
                      name="street"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                  <label className="col-md-1 col-form-label" htmlFor="aptOrUnit">Apt/Unit:</label>
                  <div className="col-md-2">
                    <input
                      className="form-control"
                      value={this.state.aptOrUnit}
                      name="aptOrUnit"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-1 col-form-label" htmlFor="city">City:</label>
                  <div className="col-md-4">
                    <input
                      className="form-control"
                      value={this.state.city}
                      name="city"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                  <label className="col-md-1 col-form-label" htmlFor="state">State:</label>
                  <div className="col-md-2">
                    <input
                      className="form-control"
                      value={this.state.state}
                      name="state"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                  <label className="col-md-1 col-form-label" htmlFor="zip">Zip:</label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      value={this.state.zip}
                      name="city"
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
       </div>
     </RentersLayout>
    );
  }
}
