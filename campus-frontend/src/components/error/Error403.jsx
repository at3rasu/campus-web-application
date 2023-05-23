import { useNavigate } from "react-router-dom"
import styles from './Error.module.css'

export const Error403 = (props) =>{
    const navigate = useNavigate()
    return(
        <div className={styles.error}>
            <h1>Ошибка 403</h1>
            <p>У вашего пользователя нет прав для просмотра страницы! Для решения данной проблемы авторизируйтесь,
                как другой пользователь.
            </p>
            <div className={styles.link}>
                <button onClick={() => navigate(props.route)}>Перейти на главную</button>
            </div>
        </div>
    )
}