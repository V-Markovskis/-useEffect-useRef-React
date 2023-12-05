import {useEffect, useState} from "react";

const Task3 = () => {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false)
        }, 3000);
        return () => clearTimeout(timer);
    },[])

    return (
        <>
            <button className='btn btn-dark' disabled={status}>Button</button>
        </>
    )
}

export default Task3