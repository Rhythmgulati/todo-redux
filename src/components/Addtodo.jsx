import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todoslice';

function Addtodo() {

const [input,setinput] = useState("");
const dispatch = useDispatch()

const addtodohandler = (e) =>{
     e.preventDefault()
     console.log("clocked");
     dispatch(addtodo(input))
     setinput('')
}
  return (
    <div >
     <form onSubmit={addtodohandler}>
        <input type="text"
        className="bg-gray-400 rounded border border-gray-600 py-2 px-3 text-blue-50 "
        value={input}
        onChange={(e)=>setinput(e.target.value)} />
        <button type='submit' >Add</button>
     </form>
    </div>
  )
}

export default Addtodo
