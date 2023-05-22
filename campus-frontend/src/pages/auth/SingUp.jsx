import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./SingUp.module.css"
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
    <div className={styles.singUp}>
      <form onSubmit={handleSubmit} className={styles.box}>
        <div className={styles.title}>
          <img src='/img/Union.svg' alt='campus_logo'/>
          <h1>Регистрация</h1>
        </div>
        <div className={styles.inputData}>
          <input
            value={name} onChange={(e) => setName(e.target.value)} 
            type='text'
            placeholder="Введите ваше имя">          
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={lastName} onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder="Введите вашу фамилию">
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Придумайте логин">
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type='email'
            placeholder="Введите вашу почту">
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Придумайте пароль">
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={secondPass} onChange={(e) => setSecondPass(e.target.value)} 
            type='password'
            placeholder="Повторите пароль">
          </input>
        </div>
        <div className={styles.checkBox}>
          <input type={'checkbox'}></input>
          <p>Я согласен с политикой конфиденциальности</p>
        </div>
        <div className={styles.btn}>
          <button
            onClick={async () => {
              const response = await registration(email, pass, login, name, lastName, secondPass)
              navigate('/SingIn')
            }}
            type='submit'>Зарегистрироваться</button>
        </div> 
        <div className={styles.next}>
          <button onClick={() => navigate('/SingIn')}>Уже есть аккаунт</button>
        </div>  
      </form>
    </div>
  )
}