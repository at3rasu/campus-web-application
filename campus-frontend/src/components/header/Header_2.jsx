import { Link, useNavigate } from "react-router-dom"
import styles from "./Header_2.module.css"
import { useContext} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"

export const Header = observer(() =>{
    const {store} = useContext(Context)
    const navigate = useNavigate ()
    const button = 'Разместить вакансию'
    const router = '/SingUpCompany'
    // const account = '/AccountCompany'
    const auth = '/SingInCompany'
    const handleLogout = () => {
        navigate('/Employers')
        store.logout()
    }

    return(
        <div className={styles.header}>
            <div className={styles.container}>
                {store.IsAuthCompany ? (
                    <div className={styles.logo}>
                        <Link to='/Employers' style={{marginLeft:"250px"}}><img src='/img/Group.svg' alt='logo_header'/></Link> 
                    </div>
                ):(
                    <div className={styles.logo}>
                        <Link to='/Employers'><img src='/img/Group.svg' alt='logo_header'/></Link> 
                        <Link to ='/' className={styles.bTn}>Стажерам</Link>
                    </div>
                )}
                <div className={styles.link}>
                    {store.IsAuthCompany ? (
                        <>
                            <Link to='/PostVacancy'>Разместить вакансию</Link>
                            <Link to='/VacancyCompany'>Мои вакансии</Link>
                            <Link to='/Employers'>Помощь</Link>
                        </>
                    ):(
                        <>
                            <AuthError button={button}/>
                            <Link to='/Employers'>Партнерам</Link>
                            <Link to='/Employers'>Помощь</Link>
                        </>    
                    )}
                </div>
                <div className={styles.btn}>
                    <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                </div>
                <div>

                    {store.IsAuthCompany ? (
                        <AccountBtn handleLogout={handleLogout} />
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