import './AccountBtn.css'
import { DropDownItem } from '../dropDown_menu/DropDownItem'
import { useState } from 'react'

export const AccountBtn = (props) =>{
    const [open, setOpen] = useState(false)
    const onClick = () => {setOpen(!open)} 

    return(
        <>
            <div className='button-menu'>
                <button 
                    onClick={() => {setOpen(!open)}}
                    ><img src='/img/user_icon.svg' alt=''/> Мой профиль</button>
            </div> 
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <DropDownItem onClick={onClick}/>
            </div>
        </>
    )
}