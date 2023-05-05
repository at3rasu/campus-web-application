import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'

export const Header = observer(() =>{
    const navigate = useNavigate()
    const {store} = useContext(Context)

    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    <Link to ='/Employers' className={styles.bTn}>Работодателям</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/AboutUs' className={styles.fistLink}>О нас</Link>
                    <Link to='/Vacancy'>Вакансии</Link>
                    <Link to='/CreateResume'>Создать резюме</Link>
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div>
                    {store.IsAuth ? (
                        <button>Фрик Даня</button>
                    ):(
                        <>
                            <div className={styles.singUp_btn}>
                                <button onClick={() => navigate('/SingIn')}>Регистрация</button>
                            </div>  
                            <div className={styles.singIn_btn}>
                                <button onClick={() => navigate('/SingIn')}>Войти</button>
                            </div> 
                        </>
                    )}
                </div>
            </div>
            <div className={styles.a}>
            </div>
        </div>
    )
})
