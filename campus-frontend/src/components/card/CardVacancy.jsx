import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useContext, useEffect} from "react"
import { Context } from "../.."

export const CardVacancy = observer(() =>{
    const {vacancyStore} = useContext(Context)
    useEffect(() => {
        vacancyStore.getAllVacancies();
      }, );
    
    return(
        <div className={styles.card}>
                {vacancyStore.vacancies.map((vacancy) => (
                    <div key={vacancy.id}>
                    <h2>{vacancy.nameVacancy}</h2>
                    <p>{vacancy.nameCompany}</p>
                    <p>{vacancy.duties}</p>
                    {/* Другие данные о вакансии */}
                    </div>
                ))}
        </div>
    )
})