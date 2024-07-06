import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from '../features/todoslice'

function Todos() {

   const todos = useSelector(state=>state.todos) 
   const dispatch = useDispatch()

  return (
    <div>
        <h2 className="my-10 text-3xl">List</h2>
    <ul className=" flex flex-col gap-8 h-[50vh] pr-4 overflow-y-scroll">
       
       {todos.map((todo)=>{
         return <li  key={todo.id} className="flex justify-between items-center">
       <div>{todo.text}</div>
       <button onClick={()=>dispatch(removetodo(todo.id))}>Delete</button>
         </li>
       })} 
       
        </ul>  
    </div>
  )
}

export default Todos
