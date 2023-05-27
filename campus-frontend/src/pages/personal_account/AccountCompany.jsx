import styles from './AccountCompany.module.css'
import { Header } from '../../components/header/Header_2'
import { Footer } from '../../components/footer/Footer'
import { useContext } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

export const AccountCompany = observer(() =>{
    
    const {store} = useContext(Context)
    return(
        <div className={styles.page}>
            <Header/>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <hr></hr>
                        <h1>Личные данные</h1>
                        <hr></hr>    
                    </div>
                    <div> 
                        {store.user && store.user.companyName ? (
                            <div>
                                <div className={styles.login}>
                                    <p>Логин: {store.user.login}</p>
                                </div>

                                <div className={styles.companyName}>
                                    <p>Название компании: {store.user.companyName}</p>
                                </div>
                                
                                <div className={styles.email}>
                                    <p>Почта: {store.user.email}</p>
                                </div>
                            </div>

                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                    </div>  
            <Footer/>
        </div>
    )
})

