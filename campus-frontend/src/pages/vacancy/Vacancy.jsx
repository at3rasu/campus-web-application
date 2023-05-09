import { useEffect, useContext } from "react"
import styles from  './Vacancy.module.css'

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { CardVacancy } from "../../components/card/CardVacancy"
import { Context } from "../.."
import { observer } from 'mobx-react'

export const Vacancy = observer(() =>{
    useEffect(() => {
        document.title = 'Вакансии'
    })

    const {vacancyStore} = useContext(Context)
    useEffect(() => {
        vacancyStore.getAllVacancies()
    }, [vacancyStore])
    
    return(
        <div className="vacancy">
            <Header />
            <div className={styles.container}>
                <div className={styles.search}>
                    <div className={styles.inputSearch}>
                        <input
                            type="search"
                            placeholder="Введите название вакансии..."></input>
                    </div>
                    <div className={styles.sortVacancy}>
                        <label>Найдено {vacancyStore.vacancyCount} вакансий</label>
                    </div>
                </div>
                <hr className={styles.hr}></hr>
                <div className={styles.vacancy}>
                    {vacancyStore.vacancies.map((vacancy) => (
                        <CardVacancy key={vacancy.id} vacancy={vacancy}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
})