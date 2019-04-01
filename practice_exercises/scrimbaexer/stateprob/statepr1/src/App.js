
import React from "react"
import TodoItem from "./ToDoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        console.log('handler triggered', id, this.state.todos[id-1].completed)
        // if completed === true, change to false and vice versa
        // 

        this.setState(prevState => {
            console.log(prevState.todos[id-1])
            if (prevState.todos[id-1].completed) {
                console.log('True')
                // return {todos[id-1].completed: false}  // fix these!
            } else {
                console.log('False')
                // return {todos[id-1].completed: true}
            }
            
        })
        }
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem 
            key={item.id} 
            item={item} 
            handleChange={this.handleChange} // you must pass handleChange to component
            // must pass function through handleChange parameter
            />)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App



// Scrimba code Change State exercise

// import React, { Component } from 'react';
// import './App.css';

// class App extends React.Component {
//     constructor() {
//         super()
//         this.handlerOnClick = this.handlerOnClick.bind(this)
//         this.state = {
//             count: 0
//         }
//     }
    
//     handlerOnClick() {
//         console.log('clicker')
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
    
//     render() {
//         return (
//             <div className='area'>
//                 <h1 className='header'>{this.state.count}</h1>
//                 <button className='button' onClick={this.handlerOnClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App
