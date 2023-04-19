import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { useEffect } from "react"
import styles from './AboutUs.module.css'

export const AboutUs = () =>{
    useEffect(() => {
        document.title = 'О нас'
    })

    return(
        <div className="AboutUs">
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>О нас</h1>
                    <p>Информационная система «Кампус»</p>
                </div>
                <div className={styles.number}>
                    <div className={styles.enum}>
                        <p>01</p>
                        <p1>Поддержка высшего образования Свердловской области</p1>
                    </div>
                    <div className={styles.enum}>
                        <p>02</p>
                        <p1>Поддержка студентов Свердловской области</p1>
                    </div>
                    <div className={styles.enum}>
                        <p>03</p>
                        <p1>Стипендиальные и скидочные программы</p1>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>Основной целью деятельности фонда «Кампус» и его программ является
                        поддержка высшего образования в Свердловской области.</p>
                </div>
                <div className={styles.text}>
                    <p>Фонд «Кампус» нацелен на поддержку студентов в период обучения. Мы 
                        хотим сделать студенческие годы лучше, а обучение доступнее, поэтому 
                        наша организация предоставляет различные льготы для учащихся. На сайте
                        Вы сможете найти разные программы поддержки: арендное жильё, кредитная
                        и стипендиальная программы, система лояльности и не только.</p>
                </div>
            </div> 
            <Footer />    
        </div> 
    )
}