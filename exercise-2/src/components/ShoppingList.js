import React from "react";
import "./ShoppingList.css";
import ShoppingListItem from "./ShoppingListItem";



export default function ShoppingList(props) {
    return (
        <ul>
        {
          props.items.map(i => <ShoppingListItem {...i} DeleteRow={props.DeleteRow} key={ i.id }/>)
        }
      </ul>
    
    )
    
}
