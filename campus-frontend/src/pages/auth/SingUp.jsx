import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./SingUp.css"
import { registration } from '../../api/userApi'

export const SingUp = () =>{
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondPass, setSecondPass] = useState('')
  const[email, setEmail] = useState('')

  const navigate = useNavigate()
  
  let response = undefined


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(login)
  }

  return(
    <div className='register'>
      <form onSubmit={handleSubmit} className='box-reg'>
        <div className='reg-up'>
          <img src='/img/logo_campus.svg' alt='campus_logo'/>
          <h1>Регистрация</h1>
        </div>
        <label
          for="name"
          className='name'>Имя</label>
        <div className='input-dt'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input
            value={name} onChange={(e) => setName(e.target.value)} 
            type='text'
            placeholder="Введите ваше имя">          
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="lastName"
          className='lastName'>Фамилия</label>
        <div className='input-dt'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input
            value={lastName} onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder="Введите вашу фамилию">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="city"
          className='lastName'>Город</label>
        <div className='input-dt'>
          <img src='/img/city.svg' alt='city'/>
          <input
            value={city} onChange={(e) => setCity(e.target.value)}
            type='text'
            placeholder="Введите ваш город">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="login"
          className='ln'>Логин</label>
        <div className='input-dt'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Придумайте логин">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="email"
          className='email'>Почта</label>
        <div className='input-dt'>
          <img src='/img/email_icon.svg' alt='email_icon'/>
          <input
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type='email'
            placeholder="Введите вашу почту">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="pass"
          className='pass'>Пароль</label>
        <div className='input-dt'>
          <img src='/img/password_icon.svg' alt='password_icon'/>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Придумайте пароль">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <label
          for="second_pass"
          className='second_pass'>Повторите пароль</label>
        <div className='input-dt'>
          <img src='/img/password_icon.svg' alt='password_icon'/>
          <input
            value={secondPass} onChange={(e) => setSecondPass(e.target.value)} 
            type='password'
            placeholder="Повторите пароль">
          </input>
        </div>
        <hr className="hr-data"></hr>
        <div className='accept'>
          <input type={'checkbox'}></input>
          <p>Я принимаю условия Пользовательского соглашения</p>
        </div>
        <div className='reg-btn'>
          <button
            onClick={async () => {
              response = await registration(email, pass, login, name, lastName, city, secondPass)
              navigate('/')
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