import './App.css'
import Task1 from "./components/pageOne/task1.tsx";
import Task2 from "./components/pageOne/task2.tsx";

function App() {

  return (
    <>
        <div className='container-page-one'>
            <Task1 />
            <br/>
            <br/>
            <Task2 />
        </div>
    </>
  )
}

export default App
