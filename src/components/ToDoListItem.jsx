import React from "react";

 export default function ListItems(props){
  const myList = props.itemList;
  const ml = myList.map((item,index)=> {return <li key={index}>{item}</li>})
  return (
     <div>
 {ml}
     </div>
         
      
  );
 
 }