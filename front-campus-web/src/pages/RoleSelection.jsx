import { useNavigate } from "react-router-dom"
import './RoleSelection.css'

export const RoleSelection = () => {
    const navigate = useNavigate()

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
                    <input value={1} type={"checkbox"}></input>
                    <label for="employer">Стажеров</label>
                </div>
                <div className="input-role">
                    <input value={2} type={"checkbox"}></input>
                    <label for="student">Стажировку</label>
                </div>
                <div className="onward-btn">
                    <button onClick={() => navigate('/SingUp')}>Далее</button>    
                </div>   
                <div className='role-btn'>
                    <button onClick={() => navigate('/')}>Уже есть аккаунт</button>
                </div>          
            </div>
        </div>
    )
}