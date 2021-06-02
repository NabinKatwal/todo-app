import React, { useState } from 'react'

export default function Todos() {

    const [todos, setTodos] = useState([
        {text:'what is up',}
    ])

    const addTodo = (e)=>{
        e.preventDefault()

        setTodos([...todos, {text: "hi"}]) 
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={"index"}>
                    <input type="checkbox"/>
                    <label >{ todo.text }</label>
                </div>
            ))}
            <br />
            <form onSubmit={addTodo}>
                <input type='text'></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
