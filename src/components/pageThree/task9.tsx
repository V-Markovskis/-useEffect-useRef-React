import {createElement, ReactElement, useRef, useState} from "react";

const Task9 = () => {
    const reference = useRef<HTMLDivElement| null>(null);
    const [clonedElements, setClonedElements] = useState<ReactElement[]>([]);

    const handleClick = () => {
        console.log('reference.current', reference.current);
        if(reference.current !== null) {
            const divElement =
                createElement('div', { ...reference.current.attributes, className:reference.current.className, key:Math.random()})
            console.log('divElement', divElement);
            setClonedElements([...clonedElements, divElement]);
            console.log('clonedElements', clonedElements);
        }
    }

    return (
        <>
            <div className='container-task-9'>
                {clonedElements.map((clonedElement, index) => (
                    <div key={index} className="clonedElement">
                        {clonedElement}
                    </div>
                ))}
                <div className='coloredBox' ref={reference}></div>
                <button className='btn btn-light' onClick={handleClick}>Clone div</button>
            </div>
        </>
    )
}

export default Task9