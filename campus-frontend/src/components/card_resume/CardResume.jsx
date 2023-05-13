import styles from './CardResume.module.css'

export const CardResume = ({resume}) =>{
    return(
        <div className={styles.component}>
            <div className={styles.title}>
               <p>{resume.vacancy}</p> 
            </div>
            <div className={styles.content}>
                <p>{resume.aboutYou}</p>
            </div>
            <div className={styles.text}>
                <p>{resume.number},</p>
                <p>{resume.city},</p>
                <p>{resume.educational}</p>
            </div>
            <div className={styles.url}>
                <p>Примеры работ: <span>{resume.workExamples}</span></p>
            </div> 
        </div>
    )
}