import styles from '../card_resume/CardResume.module.css'

export const VacancyByUser = ({vacancy}) =>{
    return(
        <div className={styles.component}>
            <div className={styles.title}>
               <p>{vacancy.nameCompany}</p> 
            </div>
            <div className={styles.content}>
                <p>{vacancy.companyDescription}</p>
            </div>
            <div className={styles.text}>
                <p>{vacancy.fullAddress},</p>
            </div>
        </div>
    )
}