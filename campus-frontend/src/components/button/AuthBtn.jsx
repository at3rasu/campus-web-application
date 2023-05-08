import { useNavigate } from 'react-router-dom'
import styles from './AuthBtn.module.css'

export const AuthBtn = (props) =>{
    const navigate = useNavigate()

    return(
        <div className={styles.btn}>
            <div className={styles.singUp_btn}>
                <button onClick={() => navigate(props.router)}>Регистрация</button>
                    </div>  
            <div className={styles.singIn_btn}>
                <button onClick={() => navigate('/SingIn')}>Войти</button>
            </div> 
        </div>
    )
}