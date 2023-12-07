import {useRef} from "react";


const Task10 = () => {
    const reference = useRef<HTMLDivElement| null>(null);

    const handleClick = () => {
        if(reference.current !== null) {
            reference.current.style.position = 'relative';
            reference.current.style.float = 'right';
            reference.current.textContent = 'I am in the corner';
            reference.current.style.display = 'flex';
            reference.current.style.justifyContent = 'center';
            reference.current.style.alignItems = 'center';
        }
    }

    return (
        <>
            <div className='task-ten-container col-4 '>
                <div ref={reference} className='coloredBox box-task10'></div>
                <br/>
                <button className='btn btn-secondary button-task10' onClick={handleClick}>Send div to corner</button>
            </div>
        </>
    )
}

export default Task10