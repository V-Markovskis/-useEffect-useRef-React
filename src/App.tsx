import './App.css'
import Task1 from "./components/pageOne/task1.tsx";
import Task2 from "./components/pageOne/task2.tsx";
import Task3 from "./components/pageOne/task3.tsx";
import Task4 from "./components/pageOne/task4.tsx";

function App() {

  return (
    <>
        <div className='container-page-one'>
            <Task1 />
            <br/>
            <br/>
            <Task2 />
            <br/>
            <Task3 />
            <br/>
            <br/>
            <Task4 />
        </div>
    </>
  )
}

export default App
