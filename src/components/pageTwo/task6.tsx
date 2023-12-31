import React, {useEffect, useState} from "react";

const Task6 = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('Render')
    });

    useEffect(() => {
        console.log('First render')
    },[])

    useEffect(() => {
        console.log('Changing count')
    }, [count]);

    useEffect(() => {
        console.log('Input change')
    }, [text]);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <div className='container-task-six col-4'>
            <button className='btn btn-primary' onClick={handleClick}>+</button>
            <p>Count: {count}</p>
            <input onChange={handleChange} value={text}/>
            <p>{text}</p>
        </div>
    )
}

export default Task6