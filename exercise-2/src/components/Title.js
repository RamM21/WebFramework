import React from "react";

export default function Title  (Data) {
    return (<div>
      <h1 id='title'>{ Data.applicationName }</h1>
      <div id='titleSub'>{ Data.applicationDescription }</div>
    </div>)
  }