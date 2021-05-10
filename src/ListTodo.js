import React from 'react'

const ListTodo = ({todoo}) => {
  return (
    <div>
      <h1>
        {todoo.todo}
      </h1>
      <div>
        <button>
          Delete
        </button>
        <button>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ListTodo
