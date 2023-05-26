import { Link } from 'react-router-dom'
import styles from './DropDownMenu.module.css'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Context } from '../..'
import { AuthBtn } from '../button/AuthBtn'

export const DropDownMenu = observer(({handleLogout, onClick}) =>{
    const {store} = useContext(Context)
    const router = '/SingUp'
    // const account = '/PersonalAccount'
    const auth = '/SingIn'
    

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
                            <Link to='/'>Мои отклики</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/PersonalAccount'>Настройки</Link>
                        </li>
                        <div className={styles.link}>
                            <button onClick={handleLogout}>Выйти</button>
                        </div>   
                    </ul>
                </div>
            ):(
                <div className={styles.component1}>
                    <ul>
                        <div className={styles.singIn}>
                            <AuthBtn router={router} auth={auth}/>
                        </div>
                        <li className={styles.link}>
                            <Link to='/'>Разместить вакансию</Link>
                        </li>
                        <li className={styles.link}>
                            <Link to='/Vacancy'>Вакансии</Link>
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