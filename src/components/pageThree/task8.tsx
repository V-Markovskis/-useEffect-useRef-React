import {useRef} from "react";


const Task8 = () => {

    const backgroundColor = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        //The issue is that TypeScript has no guarantee that we'll assign the ref to an element or assign a value to it, so its current property could possibly be null.
        if(backgroundColor.current !== null) {
            backgroundColor.current.style.backgroundColor = 'gold'
        }
    }

    return (
        <>
            <div className='container-task-8'>
                <div ref={backgroundColor} className='coloredBox'></div>
                <button className='btn btn-light' onClick={handleClick}>Change color</button>
            </div>
        </>
    )
}

export default Task8