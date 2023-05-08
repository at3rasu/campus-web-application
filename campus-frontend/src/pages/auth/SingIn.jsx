import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './SingIn.css'
import { set_login } from '../../api/user-api'


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
          <img src='/img/Union.svg' alt='campus_logo'/>
          <h1>Войти в аккаунт</h1>
        </div>
        <div className='input-data'>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Логин">
          </input>
        </div>
        <div className='input-data'>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Пароль"
            maxLength={18}
            minLength={8}>
          </input>
        </div>
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