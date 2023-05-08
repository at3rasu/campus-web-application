import { useEffect } from "react"
import styles from  './Vacancy.module.css'

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { CardVacancy } from "../../components/card/CardVacancy"

export const Vacancy = () =>{
    useEffect(() => {
        document.title = 'Вакансии'
    })
    
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
                        <label>Найдено n-кол-во вакансий</label>
                    </div>
                </div>
                <hr className={styles.hr}></hr>
                <div className={styles.vacancy}>
                    <CardVacancy />
                </div>
            </div>
            <Footer />
        </div>
    )
}