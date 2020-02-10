import React from 'react';

const Todo = props => {
    let TodoClassName = "listItem";
    if (props.listItem.completed) {
        TodoClassName = TodoClassName + " completed";
    }

    const handleClick = () => {
        props.toggleCompleted(props.listItem.id)
    };

    return (
        <div onClick={handleClick} className={TodoClassName}>
            <p>{props.listItem.task}</p>
        </div>
    )
}

export default Todo;
