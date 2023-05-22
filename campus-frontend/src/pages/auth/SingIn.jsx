import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './SingIn.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Context } from '../..'
import { FormAuth } from '../../components/auth/FormAuth';


export const SingIn = () =>{
  const navigate = useNavigate()
  const {store} = useContext(Context)
  const router = '/SingUp'

  useEffect(() => {
    document.title = 'Авторизация'
  })

  return(
    <div className={styles.box}>
      <Formik
        initialValues={{
          login: '',
          password: ''
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .required('Данное поле ввода обязательное'),
          password: Yup.string()
            .required('Данное поле ввода обязательное')
            .min(8, 'Пароль должен содержать минимум 8 символов')
        })}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            const isAuthenticated = await store.set_login(values.login, values.password)
            if (isAuthenticated) {
              navigate('/')
            } else {
              setFieldError('password', 'Неверный логин или пароль')
              setFieldError('login', '\n')
            }
          } catch (error) {
            if (error.response?.data?.message) {
              setFieldError('login', error.response.data.message)
            } else {
              console.log(error)
            }
          }
            setSubmitting(false)
        }}>
          <FormAuth router={router}/>
      </Formik>
    </div>
  )
}