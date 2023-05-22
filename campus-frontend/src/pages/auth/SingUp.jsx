import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./SingUp.module.css"
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Context } from '../..'
import { FormRegister } from '../../components/Auth/FormRegister';

export const SingUp = () =>{
  const navigate = useNavigate()
  const {store} = useContext(Context)

  return(
    <div className={styles.singUp}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          login: '',
          name: '',
          surname: '',
          repeatPass: ''
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .required('Данное поле ввода обязательное'),
          password: Yup.string()
            .required('Данное поле ввода обязательное')
            .min(8, 'Пароль должен содержать минимум 8 символов'),
          email: Yup.string()
            .email("Введите корректный адрес электронной почты")
            .required("Введите адрес электронной почты"),
          repeatPass: Yup.string()
            .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
          name: Yup.string()
            .required('Данное поле ввода обязательное'),
          surname: Yup.string()
            .required('Данное поле ввода обязательное')        
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const isAuthenticated = await store.registration(
              values.email, 
              values.password,
              values.login, 
              values.name,
              values.surname, 
              values.repeatPass)
            if (isAuthenticated) {
              navigate('/SingIn')
            }
          } catch (error) {
              console.log(error);
          }
            setSubmitting(false);
        }}>
          <FormRegister />
      </Formik>
    </div>
  )
}