import JSONPretty from 'react-json-prettify';

import React, { Component } from "react";


import '../styles/form.scss';

export default class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
    method: '',
    url: '',
    goMethod: "",
    goUrl: "",
    responseJson: {},
  }
}

fetchData = () => {
  console.log("fetch", this.state.method, this.state.url);
  fetch(this.state.url,{
    method: this.state.method || "get",
    headers: {
      'Content-Type': 'application/json',
    },
  })
   .then(async (res) => {
    const obj = {};
    for (let [key, value] of res.headers.entries()) {
      obj[key] = value;
    }
     const resJson = await res.json();
     this.setState({ responseJson: { Headers: obj, Response: resJson }});
   })
}

onChangeMethod = e => this.setState({ method: e.target.value })
onChangeUrl = e => this.setState({ url: e.target.value });

printUrlAndMethod = e => {
  e.preventDefault();
  this.setState({ goMethod: this.state.method });
  this.setState({ goUrl: this.state.url });
  this.fetchData();
};

render() {
  return (
    <div >
      <form onSubmit={this.printUrlAndMethod} className="form">
        <br/>
        <br/>
        <br/>
        <input placeholder="http://" onChange={this.onChangeUrl} />
        <br/>
        <input type="radio" value="GET" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="GET">GET</label>
        <input type="radio" value="POST" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="POST">POST</label>
        <input type="radio" value="PUT" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="PUT">PUT</label>
        <input type="radio" value="DELETE" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="DELETE">DELETE</label>
        <br/>
        <button type="submit">Go</button>
      </form>
      <div>
        <span>{this.state.goMethod} &nbsp; {this.state.goUrl} </span>
        <JSONPretty json={this.state.responseJson} />
      </div>

    </div>
  );
}
}
