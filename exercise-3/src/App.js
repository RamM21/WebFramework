import React from 'react';
import './App.css';
import Data from "./data.json";
import SearchView from './Component/SearchView';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      items: Data.data,
      searchLine: ""
    }
  }

  onSearchFieldChange=(event)=>{
    console.log("change")
    console.log(event.target.value);
    this.setState({searchLine:event.target.value});
    console.log(this.state.searchLine);
  }

  render()
  {
  return (
    <div>
      <div className="navbar_Flex">
        <input type="text" onChange={this.onSearchFieldChange} />
      </div>
      <div className="product_margin">
          <SearchView items={this.state.items.filter(Element=> Element.Title.includes(this.state.searchLine) || 
            Element.Producer.includes(this.state.searchLine))}/>
      </div>
    </div>
  );
        }
}

export default App;
