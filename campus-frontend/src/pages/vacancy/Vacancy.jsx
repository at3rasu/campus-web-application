import { useEffect } from "react"
import styles from  './Vacancy.module.css'

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { Card } from "../../components/card/Card"

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
                            placeholder="Поиск..."></input>
                        <button><img src="/img/search_logo.svg" alt="search_logo"/></button>
                    </div>
                    <div className={styles.sortVacancy}>
                        <label>Найдено n-кол-во вакансий</label>
                    </div>
                </div>
                <Card />
            </div>
            <Footer />
        </div>
    )
}