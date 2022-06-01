import React, { useState } from "react";
import ListItems from "./ToDoListItem";






export default function ToDoList(){

    const [item, setItem]= useState('');
    let[list, setList] = useState([]);

function addToList(){  
 setList(arr=>{
return [...arr,item];
 });
 setItem('');
 }

    return(
        <div className="my-content">
            <input onChange={event=>{setItem(event.target.value);}} value={item} type='text'></input>
            <button type="button" onClick={addToList}>Add me</button>
            <ListItems itemList= {list}></ListItems>
        </div>
    )
}