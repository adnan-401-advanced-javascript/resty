import React, { Component } from 'react';
import JSONPretty from 'react-json-prettify';


class Results extends Component {
  render(props) {
    return (
      <JSONPretty json={this.props.json} />
    )
  }
}

export default Results
