import { Link, useNavigate } from "react-router-dom"
import styles from "./Header_2.module.css"
import { useContext, useEffect, useState} from "react"
import { Context } from "../.."
import { observer } from 'mobx-react'
import { AuthBtn } from "../button/AuthBtn"
import { AccountBtn } from "../button/AccountBtn"
import { AuthError } from "../alert/AuthError"
import { DropDownMenuCompany } from "../dropDown_menu/DropDownMenu"
import { notify } from "../../utils/Consts"

export const Header2 = observer(() =>{
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
    const link = <Link to='/'><img src='/img/vec.svg' alt=''/> Стажерам</Link>
    const link1 = <>{store.IsAuth ?(
                <Link to='/PostVacancy'>Разместить вакансию</Link>
            ):(
                <button onClick={notify}>Разместить вакансию</button>
            )}</>
    const link2 = <Link to='/Employers'>Партнерам</Link>

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
                            <Link to='/Employers'><img src='/img/logoEmp.svg' alt=''/></Link> 
                        </div>                
                    </div>
                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <DropDownMenuCompany
                            handleLogout={handleLogout} 
                            auth={auth}
                            link={link}
                            link1={link1}
                            link2={link2}/>
                    </div>
                    <div className={styles.b}></div>
                </div>
            :(
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
            )}
        </>
    )
})