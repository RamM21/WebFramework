import React from "react";


export default function ShoppingListItem (props){
    return(
        <li className="item flex">
        <div className="flex itemQtyUnit">
          <div>
            { props.qty }
          </div>
          <div>
            { props.unit }
          </div>
        </div>
        <div>
          { props.value}
        </div>
        <div>
        <button onClick={ ()=>props.DeleteRow(props.id) }>X</button>
        </div>
      </li>)
}