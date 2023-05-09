import styles from './Card.module.css'
import { Link } from "react-router-dom";

export const CardVacancy = ({vacancy}) =>{
    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <h2>{vacancy.nameVacancy}</h2>
            </div>
            <div className={styles.content}>
                <p>{vacancy.companyDescription}</p>
                <p>Навыки: {vacancy.expectations}</p>
            </div>
            <div className={styles.link}>
                <Link to={`/vacancies/${vacancy.id.toString()}`}>Подробнее...</Link>
            </div>
        </div>
    )
}