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
<<<<<<< HEAD
                        <h2>{vacancy.nameVacancy}</h2>
                        <h4>{vacancy.companyDescription}</h4>
=======
                        <h3>{vacancy.nameVacancy}</h3>
                        <h3>{vacancy.companyDescription}</h3>
>>>>>>> 9ebccc5ed1c17dd61359d0aa3ee6659d6e7405c5
                        <p>{vacancy.skills}</p>
                        <button>Подать заявку</button>
                    </div>
                    <div className={styles.company}>
<<<<<<< HEAD

=======
>>>>>>> 9ebccc5ed1c17dd61359d0aa3ee6659d6e7405c5
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.duties}>
<<<<<<< HEAD
                        <h3>Чем предстоит заниматься?</h3>
                        <p>{vacancy.duties}</p>
                    </div>
                    <div className={styles.expectations}>
                        <h3>Что мы ожидаем от будущего кандидата?</h3>
                        <p>{vacancy.expectations}</p>
                    </div>
                    <div className={styles.skills}>
                        <h3>Приветствуются:</h3>
                        <p>{vacancy.skills}</p>
                    </div>
                    <div className={styles.conditions}>
                        <h3>Условия работы:</h3>
=======
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
>>>>>>> 9ebccc5ed1c17dd61359d0aa3ee6659d6e7405c5
                        <p>{vacancy.conditions}</p>
                    </div>
                </div>
                <div className={styles.secondContent}>
                    <h1>Связь с работодателем</h1>
<<<<<<< HEAD
                    <h3>Почта: <span>{vacancy.email}</span></h3>
                    <h3>Номер телефона: <span>{vacancy.number}</span></h3>
                    <h3>Адрес: {vacancy.fullAddress}</h3>
=======
                    <p>Почта: {vacancy.email}</p>
                    <p>Номер телефона: {vacancy.number}</p>
                    <p>Адрес: {vacancy.fullAddress}</p>
>>>>>>> 9ebccc5ed1c17dd61359d0aa3ee6659d6e7405c5
                </div>
            </div>
            <Footer />
        </div>
    )
})