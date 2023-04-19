import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './SingUpCompany.css'
//import { registrationUserCompany } from '../../api/userApi'

export const SingUpCompany = () =>{
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [secondPass, setSecondPass] = useState('')
    const[email, setEmail] = useState('')

    const navigate = useNavigate()

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
                    <img src='/img/logo_campus.svg' alt='campus_logo'/>
                    <h1>Регистрация</h1>
                </div>
                <label
                    for="name"
                    className='company-name'>Компания</label>
                <div className='input-company'>
                    <img src='/img/company_icon.svg' alt='user_icon'/>
                    <input
                        value={companyName} onChange={(e) => setCompanyName(e.target.value)} 
                        type='text'
                        placeholder="Введите название компании">          
                    </input>
                </div>
                <hr className="hr-company"></hr>
                <label
                    for="login"
                    className='company-name'>Логин</label>
                <div className='input-company'>
                    <img src='/img/user_icon.svg' alt='user_icon'/>
                    <input
                        value={login} onChange={(e) => setLogin(e.target.value)} 
                        type='text'
                        placeholder="Придумайте логин">          
                    </input>
                </div>
                <hr className="hr-company"></hr>
                <label
                    for="email"
                    className='company-name'>Почта</label>
                <div className='input-company'>
                    <img src='/img/email_icon.svg' alt='email_icon'/>
                    <input
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        type='email'
                        placeholder="Введите вашу почту">          
                    </input>
                </div>
                <hr className="hr-company"></hr>
                <label
                    for="pass"
                    className='company-name'>Пароль</label>
                <div className='input-company'>
                    <img src='/img/password_icon.svg' alt='user_icon'/>
                    <input
                        value={pass} onChange={(e) => setPass(e.target.value)} 
                        type='password'
                        placeholder="Придумайте пароль">          
                    </input>
                </div>
                <hr className="hr-company"></hr>
                <label
                    for="second-pass"
                    className='company-name'>Повторите пароль</label>
                <div className='input-company'>
                    <img src='/img/password_icon.svg' alt='user_icon'/>
                    <input
                        value={secondPass} onChange={(e) => setSecondPass(e.target.value)} 
                        type='password'
                        placeholder="Повторите пароль">          
                    </input>
                </div>
                <hr className="hr-company"></hr>
                <div className='accept-company'>
                    <input type={'checkbox'}></input>
                    <p>Я принимаю условия Пользовательского соглашения</p>
                </div>
                <div className='company-btn'>
                    <button
                        onClick={async () => {
                            //const response = await registrationUserCompany(email, pass, login, secondPass, companyName)
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