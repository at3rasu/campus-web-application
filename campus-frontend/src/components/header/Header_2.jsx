import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "./Header_2.module.css"

export const Header = () =>{
    const navigate = useNavigate()

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/Employers'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    <Link to ='/' className={styles.bTn}>Стажерам</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/AboutUs' className={styles.fistLink}>О нас</Link>
                    <Link to='/Vacancy'>Вакансии</Link>
                    <Link to='/PostVacancy'>Разместить вакансию</Link>
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div className={styles.singUp_btn}>
                    <button onClick={() => navigate('/SingIn')}>Регистрация</button>
                </div>  
                <div className={styles.singIn_btn}>
                    <button onClick={() => navigate('/SingIn')}>Войти</button>
                </div> 
            </div>
            <div className={styles.a}>
            </div>
        </header>
    )
}