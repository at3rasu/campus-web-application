import styles from './EducationSelection.module.css'

export const EducationSelection = () =>{
    return(
        <div className={styles.selection}>
            <select>
                <option>Среднее общее образование</option>
                <option>Среднее профессиональное образование</option>
                <option>Неоконченное высшее образование</option>
                <option>Высшее образование</option>
            </select>
        </div>
    )
}