import React, {Component} from 'react';

class Search_Bar extends Component {

  constructor (props) {
    super(props);
    this.state = {term: ''};
  }


  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})}/>
        Value of the input: {
          this.state.term
        }
      </div>
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
};

export default Search_Bar;
