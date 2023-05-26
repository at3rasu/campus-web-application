import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext, useEffect, useState} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"
import { DropDownMenu } from "../dropDown_menu/DropDownMenu"

export const Header = observer(() =>{
    const {store} = useContext(Context)
    const navigate = useNavigate ()
    const button = 'Создать резюме'
    const router = '/SingUp'
    // const account = '/PersonalAccount'
    const auth = '/SingIn'
    const handleLogout = async() => {
        navigate('/')  
        await store.logout()  
    }
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
        }

        handleResize()

        window.addEventListener('resize', handleResize)
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

    const [open, setOpen] = useState(false)

    return(
        <>
            {isMobile ? 
                <div className={styles.modileHeader}>
                    <div className={styles.modileContainer}>
                        <div className={styles.modileBtn}>
                            <button
                                onClick={() => {setOpen(!open)}}>
                            <img src="/img/button.svg" alt=""/></button>
                        </div>      
                        <div className={styles.modileLogo}>
                            <Link to='/'><img src='/img/mobile-logo.svg' alt=''/></Link> 
                        </div>                
                    </div>
                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <DropDownMenu handleLogout={handleLogout}/>
                    </div>
                    <div className={styles.b}></div>
                </div>
            :(
                <div className={styles.header}>
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
                                    <Link to='/CreateResume'>Создать резюме</Link>
                                    <Link to='/Vacancy'>Вакансии</Link>
                                    <Link to='/UserResume' className={styles.fistLink}>Мои резюме</Link>
                                </>                 
                            ):(
                                <>
                                    <AuthError button={button}/>
                                    <Link to='/Vacancy'>Вакансии</Link>
                                    <Link to='/' className={styles.fistLink}>Помощь</Link>
                                </>
                            )}
                        </div>
                        <div className={styles.btn}>
                            <button className="srh-btn"><img src="/img/coolicon.svg" alt="logo"/></button>
                        </div>
                        <div>
                            {store.IsAuth ? (
                                <AccountBtn handleLogout={handleLogout} />
                            ):(
                                <AuthBtn router={router} auth={auth}/>
                            )}
                        </div>
                    </div>
                    <div className={styles.a}>
                    </div>
                </div>
            )}
        </>
    )
})
