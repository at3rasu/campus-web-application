import "./MainPage.css"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { get_users } from "../../api/userApi"

export const MainPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Главная страница'
    })

    return(
        <div className="MainPage">
            <Header />
            <div className="main-content">
                <h1 className='text-h1'>Сделай первый шаг — попробуй себя на стажировке.</h1>
                <p className="text-description">Онлайн-платформа "Кампус" поможет на пути к желаемой работе.
                    Найди подходящую стажировку прямо сейчас.</p>
                <div className="search-vacancy">
                    <input 
                        type={Text}
                        placeholder="Введите вашу должность..."></input>
                    <button><img src='/img/search_logo.svg' alt='search'/></button>
                </div>
                <div className="view-internships">
                    <button
                        onClick={() => navigate('/Statistics')}>Посмотреть стажировки</button>  
                </div>
                <div className="fund-campus">
                    <div className="text-fund">
                        <h1>Фонд «Кампус»</h1>
                        <p>Объединяя сердца</p>
                    </div>
                    <div className="fund-content">
                        <p>Свердловская область — идеальное место для
                            получения высшего образования, а Екатеринбург –
                            настоящая студенческая столица России. В нашем
                            регионе учатся больше 117 тысяч студентов. У нас есть
                            все, чтобы запустить новый региональный проект.</p>
                        <p1>Наша задача создать комфортные условия для учащихся, путём внедрения
                            программ поддержки студенчества Свердловской области. Создавай свою лучшую
                            студенческую жизнь вместе с нами.</p1>
                    </div>
                    <div className="btn-fund">
                        <button
                            id="post-vacancy"
                            onClick={() => navigate('/PostVacancy')}>Опубликовать вакансию</button>
                        <button 
                            id="create-resume"
                            onClick={() => navigate('/CreateResume')}>Создать резюме</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}