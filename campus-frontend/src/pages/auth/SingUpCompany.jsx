import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import styles from './SingUp.module.css'
import { Context } from '../..'
import { FormRegisterCompany } from '../../components/Auth/FormRegisterCompany';

export const SingUpCompany = () =>{
    const navigate = useNavigate()
    const {store} = useContext(Context)

    useEffect(() => {
        document.title = 'Регистрация'
    })

    return(
        <div className={styles.singUp}>
            <Formik
            initialValues={{
                email: '',
                password: '',
                login: '',
                secondPass: '',
                companyName: ''
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
                secondPass: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
                companyName: Yup.string()
                    .required('Данное поле ввода обязательное'),    
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const isAuthenticated = await store.registration_userCompany(
                        values.email, 
                        values.password,
                        values.login, 
                        values.secondPass,
                        values.companyName)
                    if (isAuthenticated) {
                        navigate('/SingInCompany')
                    }
                } catch (error) {
                    console.log(error);
                }
                    setSubmitting(false);
                }}>
                <FormRegisterCompany />
            </Formik>
        </div>
    )
}