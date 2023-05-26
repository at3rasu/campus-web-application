import styles from './PersonalAccount.module.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { useContext } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react'

export const PersonalAccount = observer(() =>{
    const {store} = useContext(Context)

    return(
        <div className={styles.page}>
            <Header/>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <hr></hr>
                        <h1>Профиль</h1>
                        <hr></hr>    
                    </div>

                    <div> 
                    <h1>Личные данные</h1>

                    {store.user && store.user.login ? (
                        <div>
                            <div className={styles.login}>
                                <p>Логин: {store.user.login}</p>
                            </div>

                            <div className={styles.name}>
                                <p>Фамилия и Имя: {store.user.surname} {store.user.name}</p>
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

