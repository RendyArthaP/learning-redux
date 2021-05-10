import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { getTodo } from './redux/actions/todo.actions';
 
function App() {
  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.handleTodo.data)
  const loading = useSelector((state) => state.handleTodo.isLoading)
  const handleButton = () => {

  }

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  return (
    <div className="App">
      <div>
        <form>
          <input />
          <button onClick={handleButton}>
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
              })}
            </>
        }
      </div>
    </div>
  );
}

export default App;
