import React from 'react'
import ProductAdminView from './ProductAdminView'

export default function AdminView(props) {
    return (
        <div>
        Add new item
       <div>Title <input type="text" onChange={props.readTitleInput}/></div> 
       <div>Producer <input type="text" onChange={props.readProducerInput}/></div> 
       <div>Price <input type="text" onChange={props.readCostInput}/></div>
       <button onClick={()=>props.addItem(props.searchTitle,props.searchProducer,props.searchCost)}>add item</button>
       <button onClick={props.onAdminViewClick}>Disable admin view</button>
       <div>
          {
              props.items.map((i)=> <ProductAdminView {...i} key={props.id}
              onDelete={props.onDelete}/>)
          }
       </div>
      </div>
    )
}
