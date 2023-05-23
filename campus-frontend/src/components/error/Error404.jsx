import { useNavigate } from "react-router-dom"
import styles from './Error.module.css'

export const Error404 = () =>{
    const navigate = useNavigate()
    return(
        <div className={styles.error}>
            <h1>Ошибка 404</h1>
            <p>Кажется что-то пошло не так! Страница, которую вы запрашиваете не существует.
                Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.
            </p>
            <div className={styles.link}>
                <button onClick={() => navigate('/')}>Перейти на главную</button>
            </div>
        </div>
    )
}