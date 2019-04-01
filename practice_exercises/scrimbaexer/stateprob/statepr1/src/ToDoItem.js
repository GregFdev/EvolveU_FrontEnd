import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                // now call the method in the onChange
                onChange={() => props.handleChange(props.item.id)}
                // oncheck call handleChange with id parameter
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem