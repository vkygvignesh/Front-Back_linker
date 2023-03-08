import React from "react";
import Formm  from "./Formm";
//import Table1 from './table';
//import Nennw from "./vel";
import "./tbl.css"

const App = () => {
  return (
    <div style={{backgroundColor:"grey"}}>
      <h1 style={{textAlign:"center"}} >Welcome to My Car Registration App</h1> 
      <Formm/>  
      
      <vel/>
    </div>
  );
};

export default App;
