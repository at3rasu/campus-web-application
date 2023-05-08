import styles from './Card.module.css'
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> a2f3651a7f299ae45f5d75af45d45dcc6ce60957

export const CardVacancy = ({vacancy}) =>{
    return(
        <div className={styles.card}>
<<<<<<< HEAD
                        <div className={styles.title}>
                            <h2>{vacancy.nameVacancy}</h2>
                        </div>
                        <div className={styles.content}>
                            <p>{vacancy.companyDescription}</p>
                            <p>Навыки: {vacancy.expectations}</p>
                        </div>
=======
            <div className={styles.title}>
                <h2>{vacancy.nameVacancy}</h2>
            </div>
            <div className={styles.content}>
                <p>{vacancy.companyDescription}</p>
                <p>Навыки: {vacancy.expectations}</p>
            </div>
            <div className={styles.link}>
                <Link to={`/vacancies/${vacancy.id}`}>Подробнее...</Link>
            </div>
>>>>>>> a2f3651a7f299ae45f5d75af45d45dcc6ce60957
        </div>
    )
}