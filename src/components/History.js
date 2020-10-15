import React from 'react';

class History extends React.Component {

  componentDidMount(){
    if(this.props.selectedItem) this.props.selectItem(null);
  }

  render(){
  const { props } = this;
  const items = props.items || [];

  return (
    <aside className="App-history">
      <h4>Search History</h4>
      <ul data-testid="history" >
        {
          items.map((item, i) =>
            <li key={i}>
              <span className="method-span">
                {item.method}
              </span>
              <span className="url-span">
                {item.url}
              </span>
              <input type="button" onClick={() => props.selectItem(i)} value="Re-Run" />
            </li>
          )
        }
      </ul>
    </aside>
  )
}
}


export default History;
