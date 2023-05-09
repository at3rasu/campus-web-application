import { Context } from "../..";
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { observer } from 'mobx-react'
import { Header } from "../../components/header/Header"
import styles from "./VacancyDetails.module.css"
import { Footer } from "../../components/footer/Footer";

export const VacancyDetails = observer(() =>{
    const { vacancyStore } = useContext(Context)
    const { id } = useParams()
    const vacancy = vacancyStore.getVacancyById(id)

    useEffect(() => {
        vacancyStore.getAllVacancies();
    }, [vacancyStore])

    if (!vacancy) {
        return <div>Loading...</div>
    }
    return(
        <div className="ListVac">
            <Header />
            <div className={styles.container}>
                <div className={styles.cardCompany}>
                    <div className={styles.vacancy}>
                        <h3>{vacancy.nameVacancy}</h3>
                        <h3>{vacancy.companyDescription}</h3>
                        <p>{vacancy.skills}</p>
                        <button>Подать заявку</button>
                    </div>
                    <div className={styles.company}>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.duties}>
                        <h1>Чем предстоит заниматься?</h1>
                        <p>{vacancy.duties}</p>
                    </div>
                    <div className={styles.expectations}>
                        <h1>Что мы ожидаем от будущего кандидата?</h1>
                        <p>{vacancy.expectations}</p>
                    </div>
                    <div className={styles.skills}>
                        <h1>Приветствуются:</h1>
                        <p>{vacancy.skills}</p>
                    </div>
                    <div className={styles.conditions}>
                        <h1>Условия работы:</h1>
                        <p>{vacancy.conditions}</p>
                    </div>
                </div>
                <div className={styles.secondContent}>
                    <h1>Связь с работодателем</h1>
                    <p>Почта: {vacancy.email}</p>
                    <p>Номер телефона: {vacancy.number}</p>
                    <p>Адрес: {vacancy.fullAddress}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
})