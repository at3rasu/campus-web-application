import styles from '../../pages/auth/SingUp.module.css';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';

export const FormRegister = () => {
    const { errors, touched } = useFormikContext()
    const navigate = useNavigate()

    return (
        <Form className={styles.box}>
            <div className={styles.title}>
                    <img src='/img/Union.svg' alt='campus_logo'/>
                    <h1>Регистрация</h1>
            </div>
            <div className={`${styles.inputData} ${errors.name && touched.name ? styles.inputError : ''}`}>
                <Field
                    type='text'
                    name='name'
                    placeholder='Введите ваше имя'
                />
            </div>
            <ErrorMessage name='name' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.surname && touched.surname ? styles.inputError : ''}`}>
                <Field
                    type='text'
                    name='surname'
                    placeholder='Введите вашу фамилию'
                />
            </div>
            <ErrorMessage name='surname' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.login && touched.login ? styles.inputError : ''}`}>
                <Field
                    type='text'
                    name='login'
                    placeholder='Придумайте логин'
                />
            </div>
            <ErrorMessage name='login' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.email && touched.email ? styles.inputError : ''}`}>
                <Field
                    type='text'
                    name='email'
                    placeholder='Введите вашу почту'
                />
            </div>
            <ErrorMessage name='email' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.password && touched.password ? styles.inputError : ''}`}>
                <Field
                    type='password'
                    name='password'
                    placeholder='Придумайте пароль'
                />
            </div>
            <ErrorMessage name='password' component='div' className={styles.error} />
            <div className={`${styles.inputData} ${errors.repeatPass && touched.repeatPass ? styles.inputError : ''}`}>
                <Field
                    type='password'
                    name='repeatPass'
                    placeholder='Повторите пароль'
                />
                </div>
            <ErrorMessage name='repeatPass' component='div' className={styles.error} />
            <div className={styles.checkBox}>
                <input type={'checkbox'}></input>
                <p>Я согласен с политикой конфиденциальности</p>
            </div>
            <div className={styles.btn}>
                <button type='submit'>Зарегистрироваться</button>
            </div> 
            <div className={styles.next}>
                <button onClick={() => navigate('/SingIn')}>Уже есть аккаунт</button>
            </div> 
        </Form>
    )
}