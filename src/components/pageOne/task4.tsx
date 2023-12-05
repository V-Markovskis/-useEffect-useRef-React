import {useState} from "react";

const Task4 = () => {
    const [count, setCount] = useState(1)
    const [multiplyByTwo, setMultiplyByTwo] = useState(1)

    const handleClick = () => {
        setCount(count + 1);
        setMultiplyByTwo(multiplyByTwo * 2)
    }

    return (
        <>
            <button className='btn btn-success' onClick={handleClick}>count: {count}</button>
            <div className='rectangle-task-four'>
                <div>{multiplyByTwo}</div>
            </div>
        </>
    )
}

export default Task4