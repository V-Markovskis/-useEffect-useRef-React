import {useEffect, useRef} from "react";

const Task1 = () => {

    //get reference on DOM element input
    const firstInputRef = useRef<HTMLInputElement>(null);

    //set input focus after each render
    useEffect(() => {
        if(firstInputRef) {
            firstInputRef.current?.focus();
        }
    })


    return (
        <>
            <label htmlFor='first-input'>First Input &nbsp;</label>
            <input ref={firstInputRef} type='text' id='first-input' name='first-input'/>
        </>
    )
}

export default Task1