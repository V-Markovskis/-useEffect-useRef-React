import React, {useRef, useState} from "react";

const Task2 = () => {
    const [arrayElement, setArrayElement] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('')

    const reference = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setArrayElement([...arrayElement, message]);
        reference.current?.focus();
        setMessage('')
    }

    // way to find out event type (onChange = {event => console.log(event)}
    // or hover mouse on event
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='first-input'>Second Input &nbsp;</label>
                <input ref = {reference} type='text' id='first-input' name='first-input' value={message} onChange={handleChange}/>
                &nbsp;&nbsp;
                <button type='submit' className='btn btn-success'>Submit</button>
                <p>{arrayElement.join(' ')}</p>
            </form>
        </>
    )
}

export default Task2