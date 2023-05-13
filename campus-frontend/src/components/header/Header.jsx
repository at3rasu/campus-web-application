import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"

export const Header = observer(() =>{
    const {store} = useContext(Context)
    const button = 'Создать резюме'
    const router = '/SingUp'
    const account = '/PersonalAccount'
    const auth = '/SingIn'

    return(
        <div className={styles.header}  key={store.headerKey}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    <Link to ='/Employers' className={styles.bTn}>Работодателям</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/AboutUs' className={styles.fistLink}>О нас</Link>
                    <Link to='/Vacancy'>Вакансии</Link>
                    {store.IsAuth ? (
                        <Link to='/CreateResume'>Создать резюме</Link>
                    ):(
                        <AuthError button={button}/>
                    )}
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div>
                    {store.IsAuth ? (
                        <AccountBtn account={account}/>
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
