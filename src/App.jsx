import { useState } from 'react'

import './App.css'

function App() {
  const [todolist, setTodolist] = useState([]);

  function submit(event){
    event.preventDefault();
    let todo = event.target.todo.value.trim();
    console.log(todo);
    if(!todolist.includes(todo) && todo != ""){
        let finaltodo = [...todolist,todo]
        setTodolist(finaltodo)
    }
    else if( todo == ""){
      alert("Please add something")
    }
    else{
      alert("Already exists");
    }
  }

  function del(index) {
    const updatedTodolist = [...todolist]; 
    updatedTodolist.splice(index, 1); 
    setTodolist(updatedTodolist);
  }

  return (
    <>
    <div id="main">
      <h1>Todo List</h1>
      <form onSubmit={submit} >
        <input className='inp' type="text" name="todo" id="" /> <button>Add</button>
      </form>
      
      {todolist.map((v,i)=>{
         return <div key={i} className='list'> <h1 >{v} <span index={i} onClick={()=>del(i)}>&times;</span></h1></div>
      })}
      
      </div>
      
      
    </>
  )
}

export default App
