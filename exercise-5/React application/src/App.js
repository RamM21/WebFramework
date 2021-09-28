import React from 'react';
import './App.css';
import SearchView from './Component/SearchView';
import AdminView from './Component/AdminView';
import axios from 'axios';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      items: [],
      searchLine: "",
      searchTitle: "",
      searchProducer: "",
      searchCost: "",
      adminViewMode:0
    }
  }

  componentDidMount(){
    axios.get("http://localhost:4000/product")
    .then((Response)=>{
      this.setState({items:Response.data.data});
    })
    .catch((err)=>console.log(err));
  }

  addItemApi=(title,producer,cost)=>{
    axios.post("http://localhost:4000/product",{
        Title:title,
        Producer:producer,
        Cost:"$"+cost
    })
    .then(Response=>{
      this.setState({items:Response.data.data})
    })
    .catch(err=>{
      console.log(err)
    })

  }

  deleteItemApi=(id)=>{
    axios.delete("http://localhost:4000/product/"+id)
    .then(Response=>{
      console.log(id)
      this.setState({items:Response.data.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }

  onSearchFieldChange=(event)=>{
    console.log("change")
    console.log(event.target.value);
    this.setState({searchLine:event.target.value});
    console.log(this.state.searchLine);
  }

  addItem=(title,producer,cost)=>{
      this.setState({items:[...this.state.items,{Title:title,Producer:producer,Cost:"$"+cost}]});
  }
  onAdminViewClick=()=>{
    if(this.state.adminViewMode===0){
      this.setState({adminViewMode:1})
    }else{
      this.setState({adminViewMode:0})
    }
    
  }

  onDelete=(indexTitle)=>{
    for(let i=0;i<this.state.items.length;i++){
      if(this.state.items[i].Title===indexTitle){
        let newArray=[...this.state.items];
        newArray.splice(i,1);
        this.setState({items:newArray})
      }
    }
  }

  readTitleInput=(event)=>{
    this.setState({searchTitle:event.target.value})
  }
  readProducerInput=(event)=>{
    this.setState({searchProducer:event.target.value})
  }
  readCostInput=(event)=>{
    this.setState({searchCost:event.target.value})
  }


  render()
  {
      if(this.state.adminViewMode===1){
        return (
          <div>
            <div>
              <AdminView readTitleInput={this.readTitleInput} 
              readProducerInput={this.readProducerInput}
              readCostInput={this.readCostInput}
              addItem={this.addItemApi}
              searchTitle={this.state.searchTitle}
              searchProducer={this.state.searchProducer}
              searchCost={this.state.searchCost}
              onAdminViewClick={this.onAdminViewClick}
              items={this.state.items}
              onDelete={this.deleteItemApi}/>
            </div>
          </div>
        );
      }else
    return (
      <div>
        <div className="navbar_Flex">
          <input type="text" onChange={this.onSearchFieldChange} />
          <button  onClick={this.onAdminViewClick}>Admin View</button>
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
