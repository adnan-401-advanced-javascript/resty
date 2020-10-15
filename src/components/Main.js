import { Route, Switch } from 'react-router-dom';

import React, { Component } from 'react'
import Form from './Form';
import History from './History';
import Help from './Help';
import NotFound from './NotFound';


export default class Main extends Component {
 constructor(props) {
   super(props)
   this.state = {
    history: [],
    selectedItem: null,
   }
   this.selectItem = this.selectItem.bind(this);
 }

 selectItem(i){
   console.log("main selectItem", i);
   this.setState({ selectedItem: i });
 }


 componentWillMount(){
   this.setState({history: JSON.parse(localStorage.getItem("history")) || []});
 }

render() {
    return (
      <main data-testid="main">
      <Switch>
        <Route exact path="/">
          <Form selectedItem={this.state.selectedItem} />
        </Route>
        <Route exact path="/history">
          <History selectedItem = {this.state.selectedItem} selectItem={this.selectItem} items={this.state.history} />
        </Route>
        <Route path="/help">
            <Help />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
      </main>
    )
  }
}
