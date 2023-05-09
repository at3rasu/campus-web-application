import { Link } from "react-router-dom"
import styles from "./Header_2.module.css"
import { useContext} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"

export const Header = observer(() =>{
    const {store} = useContext(Context)
    const button = 'Разместить вакансию'
    const router = '/SingUpCompany'
    const account = '/AccountCompany'
    const auth = '/SingInCompany'

    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/Employers'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    <Link to ='/' className={styles.bTn}>Стажерам</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/AboutUs' className={styles.fistLink}>О нас</Link>
                    <Link to='/Vacancy'>Вакансии</Link>
                    {store.IsAuthCompany ? (
                        <Link to='/PostVacancy'>Разместить вакансию</Link>
                    ):(
                        <AuthError button={button}/>
                    )}
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div>
                    {store.IsAuthCompany ? (
                        <AccountBtn account={account} />
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