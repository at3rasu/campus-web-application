import { Link } from 'react-router-dom'
import styles from './DropDownMenu.module.css'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Context } from '../..'

export const DropDownMenu = observer(({handleLogout, auth, link, link1, link2}) =>{
    const {store} = useContext(Context)

    return(
        <>
            {store.IsAuth ? (
                <div className={styles.component}>
                    <ul>
                        <li className={styles.name}>
                            <>
                                {store.user && store.user.name && store.user.surname ? (
                                    <p>{store.user.surname} {store.user.name}</p>
                                ) : (
                                    <></>
                                )} 
                            </>     
                            <>
                                {store.user && store.user.companyName  ? (
                                    <p>{store.user.companyName}</p>
                                ) : (
                                    <></>
                                )} 
                            </>
                        </li>
                        <hr style={{border:"1px solid #9AA5B5"}}></hr>
                        <li className={styles.link}>
                            <Link to='/Vacancy'>Вакансии</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/'>Избранные вакансии</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/CreateResume'>Создать резюме</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/UserResume'>Мои резюме</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/Feedback'>Мои отклики</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/PersonalAccount'>Настройки</Link>
                        </li>
                        <div className={styles.button}>
                            <button onClick={handleLogout}>Выйти</button>
                        </div>   
                    </ul>
                </div>
            ):(
                <div className={styles.component1}>
                    <ul>
                        <li className={styles.lk}>
                            <Link to={auth}><img src='/img/union2.svg' alt=''/> Вход в личный кабинет</Link>
                        </li>
                        <hr style={{border:"1px solid #9AA5B5", marginBottom:'10px'}}></hr>
                        <li className={styles.link}>
                            {link}
                        </li>
                        <li className={styles.link}>
                            {link1}
                        </li>
                        <li className={styles.link}>
                            {link2}
                        </li>
                        <li className={styles.link}>
                            <Link to='/'>Помощь</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
})

export const DropDownMenuCompany = observer(({handleLogout, auth, link, link1, link2}) =>{
    const {store} = useContext(Context)

    return(
        <>
            {store.IsAuthCompany ? (
                <div className={styles.component}>
                    <ul>
                        <li className={styles.name}>
                            <>
                                {store.user && store.user.name && store.user.surname ? (
                                    <p>{store.user.surname} {store.user.name}</p>
                                ) : (
                                    <></>
                                )} 
                            </>     
                            <>
                                {store.user && store.user.companyName  ? (
                                    <p>{store.user.companyName}</p>
                                ) : (
                                    <></>
                                )} 
                            </>
                        </li>
                        <hr style={{border:"1px solid #9AA5B5"}}></hr>
                        <li className={styles.link}>
                            <Link to='/PostVacancy'>Разместить вакансию</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/VacancyCompany'>Мои вакансии</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/'>Отклики на вакансию</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/AccountCompany'>Настройки</Link>
                        </li>
                        <div className={styles.button}>
                            <button onClick={handleLogout}>Выйти</button>
                        </div>   
                    </ul>
                </div>
            ):(
                <div className={styles.component1}>
                    <ul>
                        <li className={styles.lk}>
                            <Link to={auth}><img src='/img/union2.svg' alt=''/> Вход в личный кабинет</Link>
                        </li>
                        <hr style={{border:"1px solid #9AA5B5", marginBottom:'10px'}}></hr>
                        <li className={styles.link}>
                            {link}
                        </li>
                        <li className={styles.link}>
                            {link1}
                        </li>
                        <li className={styles.link}>
                            {link2}
                        </li>
                        <li className={styles.link}>
                            <Link to='/Employers'>Помощь</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
})