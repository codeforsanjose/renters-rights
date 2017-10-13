import { isNumber } from 'lodash-es';
import NumberFormat from 'react-number-format';
import React from 'react';

import RentersLayout from './RentersLayout';

export default class RentCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRent: 0,
      previousRent: 0,
    };

    this.handleCurrentRentChange = this.handleCurrentRentChange.bind(this);
    this.handlePreviousRentChange = this.handlePreviousRentChange.bind(this);
  }

  handleCurrentRentChange(e, values) {
    this.setField('currentRent', values);
  }

  handlePreviousRentChange(e, values) {
    this.setField('previousRent', values);
  }

  render() {
    const { currentRent, previousRent } = this.state;

    return (
      <RentersLayout>
        <form>
          <div className="form-group">
            <label htmlFor="previous-rent">
              Previous Rent
            </label>
            <NumberFormat
              autoFocus
              className="form-control"
              id="previous-rent"
              onChange={this.handlePreviousRentChange}
              thousandSeparator
              value={previousRent}
              prefix="$"
            />
          </div>
          <div className="form-group">
            <label htmlFor="current-rent">
              Current Rent
            </label>
            <NumberFormat
              className="form-control"
              id="current-rent"
              onChange={this.handleCurrentRentChange}
              thousandSeparator
              value={currentRent}
              prefix="$"
            />
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5>Percentage Increase</h5>
            </div>
            <div className="panel-body">
              <p>
                {previousRent === 0 ? <span>&mdash;</span> : Math.round(((currentRent - previousRent) / previousRent) * 100)}%
              </p>
            </div>
          </div>
        </form>
      </RentersLayout>
    );
  }

  setField(id, values) {
    this.setState({
      [id]: values.floatValue,
    });
  }
}
