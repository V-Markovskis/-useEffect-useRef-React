import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState} from "react";

//https://popper.js.org/docs/v2/
//https://react-bootstrap.netlify.app/docs/components/dropdowns/
const Task5 = () => {
    const[color, setColor] = useState('')
    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, colorFromDropdown: string) => {
       event.preventDefault()

       console.log(colorFromDropdown)
       setColor(colorFromDropdown)
    }

    return (
        <>
            <div className='dropdown-container'>
                <button className='btn btn-info'>+</button>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Color Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item
                            href="#/action-1"
                            style={{color: 'red'}}
                            onClick={(e) => handleClick(e, 'Red')}>Red
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#/action-2"
                            style={{color: 'orange'}}
                            onClick={(e) => handleClick(e, 'Orange')}>Orange
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#/action-3"
                            style={{color: 'green'}}
                            onClick={(e) => handleClick(e, 'Green')}>Green
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br/>
            <div className='coloredBox' style={{backgroundColor: `${color}`}}></div>
        </>
    )
}

export default Task5

//
// <button className='btn btn-info'>+</button>
// {' '}
// <button className='btn btn-dark'>Color dropdown &#9660;</button>
// <div className='dropdown-content'>
//
// </div>