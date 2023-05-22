import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './SingIn.module.css'
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
    <div className={styles.box}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.title}>
          <img src='/img/Union.svg' alt='campus_logo'/>
          <h1>Вход в аккаунт</h1>
        </div>
        <div className={styles.inputData}>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Логин">
          </input>
        </div>
        <div className={styles.inputData}>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Пароль"
            maxLength={18}
            minLength={8}>
          </input>
        </div>
        <div className={styles.checkBox}>
          <input type={'checkbox'}></input>
          <label for="remebmer">Запомнить меня</label>
        </div>
        <div className={styles.btn}>
          <button
            type='submit'
            onClick={async () => {
              response = await set_login(login, pass)
              navigate("/")
            }}>Войти</button>
        </div>
        <div className={styles.next}>
          <button
            onClick={() => navigate('/SingUp')}>Или зарегистрироваться</button>
        </div>
      </form>
    </div>
  )
}