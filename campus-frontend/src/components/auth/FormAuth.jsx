import styles from '../../pages/auth/SingIn.module.css';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';

export const FormAuth = (props) => {
    const { errors, touched } = useFormikContext()
    const navigate = useNavigate()

    return (
        <Form className={styles.container}>
            <div className={styles.title}>
                <img src='/img/Union.svg' alt='campus_logo' />
                <h1>Вход в аккаунт</h1>
            </div>
            <div className={`${styles.inputData} ${errors.login && touched.login ? styles.inputError : ''}`}>
                <Field
                    type='text'
                    name='login'
                    placeholder='Логин'
                />
            </div>
            <ErrorMessage name='login' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.password && touched.password ? styles.inputError : ''}`}>
                <Field
                    type='password'
                    name='password'
                    placeholder='Пароль'
                />
                </div>
            <ErrorMessage name='password' component='div' className={styles.error} />
            <div className={styles.checkBox}>
                <Field type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember'>Запомнить меня</label>
            </div>
            <div className={styles.btn}>
                <button type='submit'>Войти</button>
            </div>
            <div className={styles.next}>
                <button onClick={() => navigate(props.router)}>Или зарегистрироваться</button>
            </div>
        </Form>
    )
}