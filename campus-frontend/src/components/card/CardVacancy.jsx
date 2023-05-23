import styles from './Card.module.css'

import { Link } from "react-router-dom";

export const CardVacancy = ({vacancy}) =>{
    return(
        <div className={styles.card}>

            <div className={styles.title}>
                <Link to={`/vacancies/${vacancy.id.toString()}`}>{vacancy.nameVacancy}</Link>
                
            </div>
            <div className={styles.content}>
                <p>{vacancy.nameCompany}</p>
                <p>{vacancy.companyDescription}</p>
                <p>{vacancy.fullAddress}</p>
            </div>
            <div className={styles.link}>
                <button>Подать заявку</button>
            </div>
        </div>
    )
}