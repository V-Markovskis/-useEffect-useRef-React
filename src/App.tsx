import './App.css'
import Task1 from "./components/pageOne/task1.tsx";
import Task2 from "./components/pageOne/task2.tsx";
import Task3 from "./components/pageOne/task3.tsx";
import Task4 from "./components/pageOne/task4.tsx";
import Task5 from "./components/pageOne/task5.tsx";
import Task5SecondTry from "./components/pageOne/task5SecondTry.tsx";
import Task6 from "./components/pageTwo/task6.tsx";
import Task7 from "./components/pageTwo/task7.tsx";

function App() {

  return (
    <>
        <section>
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
                <br/>
                <br/>
                <Task5 />
                <br/>
                <br/>
                <Task5SecondTry />
            </div>
        </section>
        <section>
            <div className='container-page-two'>
                <Task6 />
                <br/>
                <br/>
                <Task7 />
            </div>
        </section>
    </>
  )
}

export default App
