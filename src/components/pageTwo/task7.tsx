import React, {useEffect, useState} from "react";


const Task7 = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    useEffect(() => {
        setCount(count + 100);
    }, []);

    useEffect(() => {
        document.title = text;
        console.log('document.title = ', document.title)
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
            <p style={{fontSize: count + 1}}>{text}</p>
        </div>
    )
}

export default Task7