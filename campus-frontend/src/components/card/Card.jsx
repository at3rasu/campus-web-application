import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export const Card = () =>{
    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <Link to='/ListVacancy'>Junior аналитик</Link>
                <img src='/img/logo_com.svg' alt='logo_com'/>
            </div>
            <div className={styles.content}>
                <p className={styles.firstText}>Международная логистическая Компания СДЭК в
                    связи с активным развитием, приглашает в свою
                    обширную команду молодых аналитиков на стажировку.</p>
                <p className={styles.secondText}>Требуемый опыт работы: не требуется</p>
                <p className={styles.secondText}>Знание Word, Excel, Googlе таблицы: базовый уровень</p>
            </div>
            <div className={styles.link}>
                <Link to='/ListVacancy'>Подробнее...</Link>
            </div>
        </div>
    )
}