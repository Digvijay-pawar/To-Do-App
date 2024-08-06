import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo.jsx'
import { CompletedTodo } from './components/CompletedTodo.jsx'
import { LiveTodo } from './components/LiveTodo.jsx'
import { Login } from './components/Login.jsx'
function App() {
  const [completedTodo, setCompletedTodo] = useState([])
  const [liveTodo, setLiveTodo] = useState([])
  const [loginForm, setLoginForm] = useState(false)
  async function fetchTodo() {
    const response = await fetch("http://localhost:3000/todo");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    setCompletedTodo(json.completed)
    setLiveTodo(json.live)
    // console.log(todo)
  }

  function loginHandler() {
    setLoginForm(true)
  }

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])

  return (
    loginForm ? <Login></Login> : <div className="container-fluid ">
      <div className="row mt-2">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <h1><b><i>Hii, Digvijay</i></b></h1>
        </div>
        <div className="col-3 text-right p-2">
          <button className='btn btn-dark mr-4' onClick={loginHandler}><b>Login</b></button>
          <button className='btn btn-primary'><b>Register</b></button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-5 border-right">
          <CreateTodo></CreateTodo>
          <LiveTodo todos={liveTodo}></LiveTodo>
        </div>
        <div className="col-5">
          <CompletedTodo todos={completedTodo}></CompletedTodo>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default App
