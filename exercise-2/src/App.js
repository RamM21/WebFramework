import './App.css';
import Title from "./components/Title";
import ShoppingList from "./components/ShoppingList";
import "./components/ShoppingList.css"
import React from 'react';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: [
      { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
      { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
      { id: 3, value: 'Bread', qty: 3, unit: 'x' },
      { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
    ]
    };

  }
     
     DeleteRow=(idDeleteRow)=>{
      for(let i=0;i<this.state.items.length;i++){
        if(this.state.items[i].id===idDeleteRow){
          let newItemArray=[...this.state.items];
          newItemArray.splice(i,1);
          return this.setState({items:newItemArray});
        }
      }
      console.log("no such row");
   }
        
     

     randomNumber=()=>{
      var qty=Math.floor(Math.random()*(5-1)+1);
      return qty;
    }

    addSomeStuff=(name)=>{
      for(let i=0;i<this.state.items.length;i++){
          
          if(this.state.items[i].value===name){
            let newItemArray=[...this.state.items];
            newItemArray[i].qty+=this.randomNumber();
            return this.setState({items:newItemArray})
          }   
      }
            this.setState({items:[...this.state.items,{id: this.state.items.length+1, value: name, qty: this.randomNumber()}] });
          }

  render()
  {
    const {applicationName,applicationDescription}=this.props
    return (
      <div className='shoppingList'>
      <Title
       applicationDescription={applicationDescription }
       applicationName={applicationName}
      />
      < ShoppingList items={ this.state.items } DeleteRow={this.DeleteRow}/>
      <div>
        <button className="button_first" onClick={()=> this.addSomeStuff("Carrots")}>
          Add carrots
        </button>
        <button className="button" onClick={()=> this.addSomeStuff("Strawberry")}>
          Add strawberry
        </button>
        <button className="button" onClick={()=> this.addSomeStuff("Yoqurt")}>
          Add yoqurt
        </button>
        <button className="button" onClick={()=> this.addSomeStuff("Beer")}>
          Add beer
        </button>
      </div>
      </div>
    );
  }
}

export default App;
