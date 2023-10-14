import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  

  return (
    <>
    <div className='text-center'  >
      <h1 className='text-white text-4xl mt-6'>Todo List Project By ReduxToolkit</h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
