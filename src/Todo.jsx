import React from 'react'
import { useState } from "react"

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    function Submit(e) {
        e.preventDefault();
        const addTodo = {
            id: todos.length + 1,
            text: todo,
            completed:false,
        }
        setTodos([...todos, addTodo])
        setTodo('')
    }
       function Delete(id)
       {
           const Update=todos.filter((todo)=>todo.id!==id)
           setTodos(Update)
       }
       function todoUpdate(id){
           const Update= todos.map((todo)=>
           {

               if(todoEditing==todo.id)
               {
                   todo.text=editingText;
                }
                return todo
            })
            setTodos(Update)
            setEditingText('')
            setTodoEditing(null)
       }
       function toggleComplete(id)
       {
        const Tog=todos.map((todo)=>{
            {
                if(todo.id==id)
                {
                    todo.completed=!todo.completed
                }
                return todo
            }
        })
        setTodos(Tog)
        console.log(Tog);
       }
    return (
        <div>
            <h2>My todo App</h2>
            <form onSubmit={Submit}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button type="submit">Add Todo</button>
            </form>
            {
                todos.map((todo) =>
                <>

                    <div  > 
                         {todoEditing===todo.id?
                         (<input type='text' onChange={(e)=>setEditingText(e.target.value)} value={editingText}/>):
                         (<h3 key={todo.id}>{todo.text} </h3>)
                         } 
                    </div>
                    <button onClick={()=>Delete(todo.id) }>Delete</button>
                    <input type="checkbox" onChange={()=>toggleComplete(todo.id)} checked={todo.completed} />
                    {todoEditing==todo.id?
                    (  <button onClick={()=>todoUpdate(todo.id)}>Submit</button>):
                    (<button onClick={()=>setTodoEditing(todo.id)}>Update Todo</button>)}<hr></hr>
                    
                  
                   </>
                    )
            }
        </div>
    )
}
