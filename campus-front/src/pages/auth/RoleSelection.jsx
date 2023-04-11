import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import './RoleSelection.css'

export const RoleSelection = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Регистрация'
    })

    const [selectedCheckbox, setSelectedCheckbox] = useState('')

    const handleCheckboxChange = (event) => {
      setSelectedCheckbox(event.target.value)
    }

    const handleButtonClick = () =>{
        if (selectedCheckbox === 'employer'){
            navigate('/SingUpCompany')
        } else if (selectedCheckbox === 'student'){
            navigate('/SingUp')
        }        
    }

    return(
        <div className="RoleSelection">
            <div className="RS-box">
                <div className="reg-logo">
                    <img src='/img/logo_campus.svg' alt='campus_logo'/>
                    <h1>Регистрация</h1> 
                </div>
                <div className="i-search">
                    <h1>Я ищу...</h1>
                </div>
                <div className="input-role">
                    <input value='employer' 
                        type={"checkbox"}
                        checked={selectedCheckbox === 'employer'}
                        onChange={handleCheckboxChange}></input>
                    <label for="employer">Стажеров</label>
                </div>
                <div className="input-role">
                    <input value='student' 
                        type={"checkbox"}
                        checked={selectedCheckbox === 'student'}
                        onChange={handleCheckboxChange}></input>
                    <label for="student">Стажировку</label>
                </div>
                <div className="onward-btn">
                    <button onClick={handleButtonClick}>Далее</button>    
                </div>   
                <div className='role-btn'>
                    <button onClick={() => navigate('/SingIn')}>Уже есть аккаунт</button>
                </div>          
            </div>
        </div>
    )
}