import React from 'react';

export default class ResourceFilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isChecked: []
    }
    this.selectAll = this.selectAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { checked, listValues } = this.props;
    let isChecked = [];
    for (var i=0; i<listValues.length; i++) {
      if (checked.includes(listValues[i].value) || checked.includes('all')) {
        isChecked.push(true);
      } else {
        isChecked.push(false);
      }
    }
    
    this.setState({
      isChecked: isChecked
    })
  }

  selectAll(e) {
  	this.setState({
    	isChecked: this.state.isChecked.map(function() { 
            return e.target.checked 
        })
    });
  }

  handleChange (index, e) {
    var checked = this.state.isChecked;
    checked[index] = e.target.checked;
    
    this.setState({
      isChecked: checked
    })
  }  

  render() {
    const {listValues, info} = this.props;

    let isAllChecked = this.state.isChecked.filter(function(c) {
    	return c;
    }).length === this.state.isChecked.length;
    return(
            <div className="panel-body">
              <div className="form-group" >
                <label className="control-label"> {info.heading} </label>

                <div className="checkbox">
                  <label>
                    <input type="checkbox" name={info.type} value="all" 
                      checked={isAllChecked}
                      onChange={this.selectAll}
                    />
                    <b><u>Select All</u></b>
                  </label>
                </div>

                  {listValues.map( (listObj, idx) => 
                      <div className="checkbox" key={idx}> 
                        <label>
                          <input type="checkbox" name={info.type} value={listObj.value} 
                            checked={this.state.isChecked[idx] || false}
                            onChange={this.handleChange.bind(this,idx)}
                          />
                          {listObj.displayName}
                        </label>
                      </div>
                    )
                  }
              </div>
            </div>
    );
  }
}
