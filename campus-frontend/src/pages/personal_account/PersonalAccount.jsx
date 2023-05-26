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
                    <h1>Личные данные</h1>
                    <>
                        {store.user && store.user.login && store.user.surname ? (
                            <p>{store.user.login} {store.user.name}</p>
                        ) : (
                            <>Loading...</>
                        )} 
                    </> 
                </div>
            <Footer/>
        </div>
    )
})

