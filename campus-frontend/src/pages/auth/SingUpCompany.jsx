import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './SingUpCompany.css'
import { registrationUserCompany } from '../../api/user-api'
export const SingUpCompany = () =>{
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [secondPass, setSecondPass] = useState('')
    const[email, setEmail] = useState('')

    const navigate = useNavigate()
    let response = undefined
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(login)
    }

    useEffect(() => {
        document.title = 'Регистрация'
    })

    return(
        <div className='register-company'>
            <form onSubmit={handleSubmit} className='box-company'>
                <div className='reg-company'>
                    <img src='/img/Union.svg' alt='campus_logo'/>
                    <h1>Регистрация</h1>
                </div>
                <div className='input-company'>
                    <input
                        value={companyName} onChange={(e) => setCompanyName(e.target.value)} 
                        type='text'
                        placeholder="Введите название компании">          
                    </input>
                </div>
                <div className='input-company'>
                    <input
                        value={login} onChange={(e) => setLogin(e.target.value)} 
                        type='text'
                        placeholder="Придумайте логин">          
                    </input>
                </div>
                <div className='input-company'>
                    <input
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        type='email'
                        placeholder="Введите вашу почту">          
                    </input>
                </div>
                <div className='input-company'>
                    <input
                        value={pass} onChange={(e) => setPass(e.target.value)} 
                        type='password'
                        placeholder="Придумайте пароль">          
                    </input>
                </div>
                <div className='input-company'>
                    <input
                        value={secondPass} onChange={(e) => setSecondPass(e.target.value)} 
                        type='password'
                        placeholder="Повторите пароль">          
                    </input>
                </div>
                <div className='accept-company'>
                    <input type={'checkbox'}></input>
                    <p>Я согласен с политикой конфиденциальности</p>
                </div>
                <div className='company-btn'>
                    <button
                        onClick={async () => {
                            response = await registrationUserCompany(email, pass, login, secondPass, companyName)
                            navigate('/')
                          }}
                        type='submit'>Зарегистрироваться</button>
                </div> 
                <div className='route-singIn'>
                    <button onClick={() => navigate('/SingIn')}>Уже есть аккаунт</button>
                </div> 
            </form>
        </div>
    )
}