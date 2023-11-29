import './App.css';
import React, { useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);



  const changeHandle = (e) =>{
    e.preventDefault();
    setToDos([...toDos, todoItem]);
    setToDo("");
  }
  
  const todoItem = {
    text:toDo,
    complete: false
  }

  const handleDelete = ( delIdx ) =>{
    const filteredToDos = toDos.filter((_toDo, i) =>{
      return i !== delIdx;
    })
    setToDos(filteredToDos);
  }


  return (
    <div>
      <form onSubmit={(e) =>{
        changeHandle(e)
      }}
      
    >
      <input onChange={(e)=> {
      setToDo(e.target.value);
      }}
      type='text' value={toDo}
      />
      <div>
        <button>Add</button>
      </div>
      </form> 

      {toDos.map((toDo, i) =>{
          return (
          <div key={i}>
            <input checked={toDo.complete}  type='checkbox'></input>
            <span>{toDo.text}</span>
            <button onClick={(e) =>{
              handleDelete(i);
            }}>Delete</button>
          </div>
          );

        })}
    </div>
  );
}

export default App;
