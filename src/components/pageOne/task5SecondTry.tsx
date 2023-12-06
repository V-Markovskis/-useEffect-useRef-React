import {useState} from "react";


const Task5SecondTry = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='dropdown-global'>
                <div className='menu-container'>
                    <div className='menu-trigger' onClick={() => setOpen(!open)}>
                        <span className='btn btn-dark'> Color dropdown &#9660;</span>
                    </div>
                </div>

                <div className={`dropdown-menu ${open? 'block' : 'none'}`}>
                    <ul>
                        <DropdownColor text={'Red'}/>
                        <DropdownColor text={'Red'}/>
                        <DropdownColor text={'Red'}/>
                    </ul>
                </div>
            </div>
        </>
    )
}

function DropdownColor(props: any) {
    return (
        <li className='dropdowmColor'>
            <a>{props.text}</a>
        </li>
    )
}

export default Task5SecondTry