import styles from './PersonalAccount.module.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const PersonalAccount = () =>{
    

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
                </div>
            <Footer/>
        </div>
    )
}

