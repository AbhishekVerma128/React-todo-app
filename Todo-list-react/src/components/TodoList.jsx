import React, { useInsertionEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
const TodoList = () => {


    const [item, setItem] = useState("")
    const [itemList, setItemList] = useState([]);
    const [editItem, setEditItem] = useState(true);
    const [elem, setElem] = useState(null);

   

    const handleSubmit = () => {
        if(!item)
        {

        }
        else if (item && !editItem){
            setItemList(
                itemList.map((data)=>{
                   if(data.id === elem.id){
                    return {...data, name:item}
                   }
                   return data;
                }
            ))
            setEditItem(true);
            setItem("")
            setElem(null);

        }
        else{
        setItemList([...itemList, { name: item, id: small_id }])
        setItem('');
        }

    }
    const handleEdit = (editValue) => {

       let newEditItem = itemList.find ((ele) =>{
            return ele === editValue
       })
      
       setEditItem(false);
       setItem(newEditItem.name)
       setElem(newEditItem);
    }


    const handleDelete = (deleteValue) => {
        const newItemList = itemList.filter((data) => {
            return data.id !== deleteValue.id
        })
        setItemList(newItemList);
    }

    
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8)


    return (
        <>
            <h1> Todo List</h1>
            <input type="text" onChange={(event) =>{setItem(event.target.value)}} value={item} />

            <button onClick={handleSubmit}>{editItem ? "Add ": "Edit "}Item</button>

            {itemList.map((list, index) => {
                return (
                    <div className="list" key={index}>
                        <span>{list.name} </span>
                        <button onClick={() => { handleEdit(list) }}>Edit</button>
                        <button onClick={() => { handleDelete(list) }}>Delete</button>
                    </div>

                )
            })}

            <h2>List Updated</h2>

        </>

    )
}

export default TodoList;