import { Link } from 'react-router-dom'
import styles from './DropDownItem.module.css'
import { logout } from '../../api/user-api'

export const DropDownItem = (props) =>{
    return(
        <div className={styles.component}>
            <ul>
                <li className={styles.name}>
                    <p>Артур Иманкулов</p>
                    <button
                        onClick={props.onClick}><img src='/img/menu.svg' alt=''/></button>
                </li>
                <hr style={{border:"1px solid #9AA5B5"}}></hr>
                <li className={styles.link}>
                    <Link to='/'>Избранные вакансии</Link>
                </li>
                <li className={styles.link}>
                    <Link to='/'>Мои отклики</Link>
                </li>
                <li className={styles.link}>
                    <Link to='/PersonalAccount'>Настройки</Link>
                </li>
                <div className={styles.link}>
                    <button onClick={async () => {await logout()}}
                        >Выйти</button>
                </div>   
            </ul>
        </div>
    )
}