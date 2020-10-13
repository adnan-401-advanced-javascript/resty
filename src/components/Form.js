import React, { Component } from "react";

import Results from "./Results";

import '../styles/form.scss';

export default class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
    method: '',
    url: '',
    reqBody: '',
    goMethod: "",
    goUrl: "",
    goBody: "",
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
    body: JSON.stringify(this.state.reqBody),
  })
   .then(async (res) => {
     console.log(res);
     /*
    const obj = {};
    for (let [key, value] of res.headers.entries()) {
      obj[key] = value;
    }
     const resJson = await res.json();
     this.setState({ responseJson: { Headers: obj, Response: resJson }});
     */
   })
}

onChangeMethod = e => this.setState({ method: e.target.value })
onChangeUrl = e => this.setState({ url: e.target.value });
// onChangeBody = e => this.setState({ reqBody: e.target.value });

printUrlAndMethod = e => {
  e.preventDefault();
  this.setState({ goMethod: this.state.method });
  this.setState({ goUrl: this.state.url });
  this.setState({ goBody: this.state.reqBody });
  this.fetchData();
};

render() {
  return (
    <div >
      <form onSubmit={this.printUrlAndMethod} className="form">
        <br/>
        <br/>
        <br/>
        <input name="url" placeholder="http://" onChange={this.onChangeUrl} />
        <br/>
        <input checked type="radio" value="GET" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="GET">GET</label>
        <input type="radio" value="POST" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="POST">POST</label>
        <input type="radio" value="PUT" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="PUT">PUT</label>
        <input type="radio" value="DELETE" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="DELETE">DELETE</label>
        <br/>
        <br/>
        <textarea name="reqBody" defaultValue={`{ "username": "adnan",
    "pass": "123"
 }`}></textarea>
        <br/>
        <button type="submit">Go</button>
      </form>
      <div>
        <span>{this.state.goMethod} &nbsp; {this.state.goUrl} </span>
      </div>
      <div style={{ float: "left" }}>
      <Results json={this.state.responseJson} />
      </div>
    </div>
  );
}
}
