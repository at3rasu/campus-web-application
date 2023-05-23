import './AccountBtn.css'
import { DropDownItem } from '../dropDown_menu/DropDownItem'
import { useState } from 'react'
import { observer } from 'mobx-react'

export const AccountBtn = observer(({handleLogout}) =>{
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
                <DropDownItem onClick={onClick} handleLogout={handleLogout}/>
            </div>
        </>
    )
})
