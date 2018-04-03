import React from 'react';
import RentersLayout from './RentersLayout'

export default class AddressCheck extends React.Component {

  /*
    Set fields on this component's state to handle
    the state of the input fields
   */
   constructor(props) {
     super(props);
     this.state = {
       street: '',
       aptOrUnit: '',
       state: '',
       city: '',
       zip: '',
     }
    /*
      Collect values in the input fields using onChange listeners
     */
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleChange(event) {
     /*
        Get the event target name (e.g. "street") and use it to target
        the key on the state object with the same name, using bracket syntax
      */
     this.setState({
       [event.target.name]: event.target.value
     });

   }

   handleSubmit(event) {
     // console.log(this.state.street);
     // console.log(this.state.aptOrUnit);
     // console.log(this.state.city);
     // console.log(this.state.state);
     // console.log(this.state.zip);
     event.preventDefault();
   }


  // addressCheck(key,address,citystatezip) {
  //
  //   key="X1-ZWz18q9c4vs1e3_af1tq";
  //   url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}";
  //   $.getJSON(url);
  //
  // }

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
           </div>

          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <h3> What is your address?</h3>
              <div className="form-group row">
                <label className="col-sm-1 col-md-1 col-form-label" htmlFor="street">Street Address:</label>
                <div className="col-sm-8 col-md-8">
                  <input
                    className="form-control"
                    name="street"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <label className="col-sm-1 col-md-1 col-form-label" htmlFor="aptOrUnit">Apt/Unit:</label>
                <div className="col-sm-2 col-md-2">
                  <input
                    className="form-control"
                    name="aptOrUnit"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-1 col-md-1 col-form-label" htmlFor="city">City:</label>
                <div className="col-sm-4 col-md-4">
                  <input
                    className="form-control"
                    name="city"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <label className="col-sm-1 col-md-1 col-form-label" htmlFor="state">State:</label>
                <div className="col-sm-2 col-md-2">
                  <input
                    className="form-control"
                    name="state"
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <label className="col-sm-1 col-md-1 col-form-label" htmlFor="zip">Zip:</label>
                <div className="col-sm-3 col-md-3">
                  <input
                    className="form-control"
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

     </RentersLayout>
    );
  }
}
