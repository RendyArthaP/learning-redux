import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { getTodo, postTodo } from './redux/actions/todo.actions';
import ListTodo from './ListTodo';
 
function App() {
  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.handleTodo.data)
  const loading = useSelector((state) => state.handleTodo.isLoading)
  const [dataTodo, setDataTodo] = useState("")

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(postTodo(dataTodo))
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
            Submit
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
                    <ListTodo todoo = {todoo}/>
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
