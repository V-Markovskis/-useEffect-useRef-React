import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState} from "react";

//https://popper.js.org/docs/v2/
//https://react-bootstrap.netlify.app/docs/components/dropdowns/
const Task5 = () => {
    const[color, setColor] = useState('')
    const[rectangles, setRectangles] = useState<string[]>([])
    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, colorFromDropdown: string) => {
       event.preventDefault()

       console.log(colorFromDropdown)
       setColor(colorFromDropdown)
    }

    const addRectangle = () => {
        setRectangles([...rectangles, color])
        console.log('color', color)
    }

    return (
        <>
            <div className='dropdown-container'>
                <button className='btn btn-info' onClick={addRectangle}>+</button>
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
                {rectangles.map((color, key) => (
                    <CreateRectangle key={key} color={color} />
                ))}
            </div>
            <br/>

        </>
    )
}

const CreateRectangle = ({ color }: { color: string }) => {
    return (
        <div className='coloredBox' style={{backgroundColor: `${color}`}}></div>
    )
}

export default Task5
