import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"

export const Header = observer(() =>{
    const {store} = useContext(Context)
    const navigate = useNavigate ()
    const button = 'Создать резюме'
    const router = '/SingUp'
    // const account = '/PersonalAccount'
    const auth = '/SingIn'
    const handleLogout = () => {
        navigate('/')
        store.logout()
    }

    return(
        <div className={styles.header}  key={store.headerKey}>
            <div className={styles.container}>
                {store.IsAuth ? (
                    <div className={styles.logo}>
                        <Link to='/' style={{marginLeft:"250px"}}><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    </div>
                ):(
                    <div className={styles.logo}>
                        <Link to='/'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                        <Link to ='/Employers' className={styles.bTn}>Работодателям</Link>
                    </div>
                )}
                <div className={styles.link}>
                    {store.IsAuth ? (
                        <>  
                            <Link to='/UserResume' className={styles.fistLink}>Мои резюме</Link>
                            <Link to='/CreateResume'>Создать резюме</Link>
                            <Link to='/Vacancy'>Вакансии</Link>
                        </>                 
                    ):(
                        <>
                            <Link to='/AboutUs' className={styles.fistLink}>О нас</Link>
                            <AuthError button={button}/>
                            <Link to='/Vacancy'>Вакансии</Link>
                        </>
                    )}
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div>
                    {store.IsAuth ? (
                        <AccountBtn handleLogout={handleLogout}/>
                    ):(
                        <AuthBtn router={router} auth={auth}/>
                    )}
                </div>
            </div>
            <div className={styles.a}>
            </div>
        </div>
    )
})
