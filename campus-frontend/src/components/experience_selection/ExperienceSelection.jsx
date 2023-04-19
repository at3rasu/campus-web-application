import styles from './ExperienceSelection.module.css'

export const ExperienceSelection = () =>{
    return(
        <div className={styles.selection}>
            <select>
                <option>Без опыта</option>
                <option>1-2 года</option>
                <option>3-6 лет</option>
                <option>6 и более</option>
            </select>
        </div>
    )
}