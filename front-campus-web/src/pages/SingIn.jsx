import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './SingIn.css'
import { login } from '../http/userApi'


export const SingIn = () =>{
  const [log, setLogin] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()

  // const singIn = async () => {
  //   const response = await login(log, pass)
  //   navigate("/main")
  // }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(log)
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
            value={log} onChange={(e) => setLogin(e.target.value)}
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
            placeholder="Введите ваш пароль">
          </input>
        </div>
        <hr className="hr-depart"></hr>
        <div className='remember-me'>
          <input type={'checkbox'}></input>
          <p>Запомнить меня</p>
        </div>
        <div className='auth-btn'>
          <button
            type='submit'
            onClick={async () => {
              const response = await login(log, pass)
              navigate("/MainPage")
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