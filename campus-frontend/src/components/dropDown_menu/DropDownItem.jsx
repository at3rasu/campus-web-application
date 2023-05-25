import { Link } from 'react-router-dom'
import styles from './DropDownItem.module.css'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Context } from '../..'

export const DropDownItem = observer(({handleLogout, onClick}) =>{
    const {store} = useContext(Context)

    return(
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
                    <button
                        onClick={onClick}><img src='/img/menu.svg' alt=''/></button>
                </li>
                <hr style={{border:"1px solid #9AA5B5"}}></hr>
                <li className={styles.link}>
                    <Link to='/'>Избранные вакансии</Link>
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
    )
})