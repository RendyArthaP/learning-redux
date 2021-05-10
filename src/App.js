import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { getTodo, postTodo, deleteTodo, updateTodo } from './redux/actions/todo.actions';
import ListTodo from './ListTodo';
 
function App() {
  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.handleTodo.data)
  const loading = useSelector((state) => state.handleTodo.isLoading)
  const [updateButton, setUpdateButton] = useState(false)
  const [dataTodo, setDataTodo] = useState("")
  const [editTodo, setEditTodo] = useState({})

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  const handleButton = (e) => {
    e.preventDefault();
    if(!updateButton) {
      if(dataTodo === "") {
        alert('Input your todo')
      } else {
        dispatch(postTodo(dataTodo))
      }
    } else {  
      const update = {
        id: editTodo.id,
        todo: dataTodo
      }
      dispatch(updateTodo(update))
      setUpdateButton()
    }
  }

  const handleEditButton = (todoo) => {
    console.log(todoo)
    setUpdateButton(true)
    setDataTodo(todoo.todo)
    setEditTodo(todoo)
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleButton}>
          <input 
            type="text"
            value={dataTodo} 
            onChange={(e) => setDataTodo(e.target.value)}
          />
          <button type="submit">
            {updateButton ? 'Update' : 'Add'}
          </button>
        </form>
        {loading 
          ?
            <div>
              <h1>Loading...</h1>
            </div>
          :
            <>
              {todoData.map((todoo) => {
                return (
                  <div key={todoo.id}>
                    <ListTodo 
                      todoo = {todoo}
                      deleteTodo = {deleteTodo}
                      dispatch = {dispatch}
                      handleEditButton = {handleEditButton}
                    />
                  </div>
                )
              })}
            </>
        }
      </div>
    </div>
  );
}

export default App;
