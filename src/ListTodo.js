import React from 'react'

const ListTodo = ({todoo, deleteTodo, dispatch, handleEditButton}) => {
  return (
    <div>
      <h1>
        {todoo.todo}
      </h1>
      <div>
        <button onClick={() => dispatch(deleteTodo(todoo.id))}>
          Delete
        </button>
        <button onClick={() => handleEditButton(todoo)}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ListTodo
