import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./SingUp.css"
import { registration } from '../../api/user-api'

export const SingUp = () =>{
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondPass, setSecondPass] = useState('')
  const[email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(login)
  }

  return(
    <div className='register'>
      <form onSubmit={handleSubmit} className='box-reg'>
        <div className='reg-up'>
          <img src='/img/Union.svg' alt='campus_logo'/>
          <h1>Регистрация</h1>
        </div>
        <div className='input-dt'>
          <input
            value={name} onChange={(e) => setName(e.target.value)} 
            type='text'
            placeholder="Введите ваше имя">          
          </input>
        </div>
        <div className='input-dt'>
          <input
            value={lastName} onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder="Введите вашу фамилию">
          </input>
        </div>
        <div className='input-dt'>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Придумайте логин">
          </input>
        </div>
        <div className='input-dt'>
          <input
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type='email'
            placeholder="Введите вашу почту">
          </input>
        </div>
        <div className='input-dt'>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Придумайте пароль">
          </input>
        </div>
        <div className='input-dt'>
          <input
            value={secondPass} onChange={(e) => setSecondPass(e.target.value)} 
            type='password'
            placeholder="Повторите пароль">
          </input>
        </div>
        <div className='accept'>
          <input type={'checkbox'}></input>
          <p>Я согласен с политикой конфиденциальности</p>
        </div>
        <div className='reg-btn'>
          <button
            onClick={async () => {
              const response = await registration(email, pass, login, name, lastName, secondPass)
              navigate('/SingIn')
            }}
            type='submit'>Зарегистрироваться</button>
        </div> 
        <div className='login-btn'>
          <button onClick={() => navigate('/SingIn')}>Уже есть аккаунт</button>
        </div>  
      </form>
    </div>
  )
}