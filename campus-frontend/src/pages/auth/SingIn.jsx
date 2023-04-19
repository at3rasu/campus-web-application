import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './SingIn.css'
import { set_login } from '../../api/userApi'

export const SingIn = () =>{
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  
  let response = undefined

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Авторизация'
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(login)
  }

  return(
    <div className='auth'>
      <form onSubmit={handleSubmit} className='box-auth'>
        <div className='sing-up'>
          <img src='/img/logo_campus.svg' alt='campus_logo'/>
          <h1>Вход</h1>
        </div>
        <label
            for="login"
            className='login'>Логин</label>
        <div className='input-data'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Введите ваш логин">
          </input>
        </div>
        <hr className="hr-depart"></hr>
        <label 
          for="pass" 
          className='password'>Пароль</label>
        <div className='input-data'>
          <img src='/img/password_icon.svg' alt='password_icon'/>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Введите ваш пароль"
            maxLength={18}
            minLength={8}>
          </input>
        </div>
        <hr className="hr-depart"></hr>
        <div className='remember-me'>
          <input type={'checkbox'}></input>
          <label for="remebmer">Запомнить меня</label>
        </div>
        <div className='auth-btn'>
          <button
            type='submit'
            onClick={async () => {
              response = await set_login(login, pass)
              navigate("/")
            }}>Войти</button>
        </div>
        <div className='next'>
          <button
            onClick={() => navigate('/RoleSelection')}>Или зарегистрироваться</button>
        </div>
      </form>
    </div>
  )
}