import styles from './MainPage.module.css'
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Context } from '../..'
import { notify } from '../../utils/Consts'

export const MainPage = () => {
    const navigate = useNavigate()
    const {store} = useContext(Context)

    useEffect(() => {
        document.title = 'Главная страница'
    })

    return(
        <div className="MainPage">
            <Header />
            <div className={styles.container}>
                <div className={styles.firstContainer}>
                    <div className={styles.fisrtContent}>
                        <div className={styles.firstText}>
                            <h1>Попробуй себя на</h1>
                            <img src='/img/text.svg' alt='text'/>
                            <p>Попробуйте сервис для поиска стажировок в области.
                                Стажировка в ведущих компаниях региона станет идеальным
                                стартом для начала вашей карьеры. Выбирайте среди компаний-партнёров 
                                «Кампуса».</p>
                        </div>
                        <div className={styles.firstSvg}>
                            <img src='/img/content.svg' alt='content'/>
                        </div>
                    </div>
                    <img className={styles.img} src='/img/star.svg' alt='star'/>
                </div>
                <div className={styles.svg}>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.secondContent}>
                        <div className={styles.vacancy}>
                            <div className={styles.new}>
                                <h1>Новые</h1>
                                <hr></hr>
                            </div>
                            <div className={styles.featured}>
                                <h1>Рекомендуемые</h1>
                                <hr></hr>
                            </div>
                            <div className={styles.popular}>
                                <h1>Популярные</h1>
                                <hr></hr>
                            </div>
                            <div className={styles.recent}>
                                <h1>Недавние</h1>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.svg1}>
                </div>
                <div className={styles.thirdContainer}>
                    <div className={styles.thirdContent}>
                        <div className={styles.secondText}>
                            <h1>Фонд «Кампус»</h1>
                            <p>Объединяя сердца</p>
                        </div>
                        <div className={styles.textContent}>
                            <p>Свердловская область — идеальное место для
                                получения высшего образования, а Екатеринбург –
                                настоящая студенческая столица России. В нашем
                                регионе учатся больше 117 тысяч студентов. У нас есть
                                все, чтобы запустить новый региональный проект.</p>
                            <p1>Наша задача создать комфортные условия для учащихся, путём внедрения
                                программ поддержки студенчества Свердловской области. Создавай свою лучшую
                                студенческую жизнь вместе с нами.</p1>
                        </div>
                        {store.IsAuth ?(
                            <div className={styles.btn}>
                                <button
                                id={styles.postVacancy}
                                onClick={() => navigate('/PostVacancy')}>Опубликовать вакансию</button>
                                <button 
                                    id={styles.createResume}
                                    onClick={() => navigate('/CreateResume')}>Создать резюме</button>
                            </div>
                        ):(
                            <div className={styles.btn}>
                                <button
                                    id={styles.postVacancy}
                                    onClick={notify}>Опубликовать вакансию</button>
                                <button 
                                    id={styles.createResume}
                                    onClick={notify}>Создать резюме</button>
                            </div>
                        )}
                    </div>
                    <div className={styles.svg2}></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}