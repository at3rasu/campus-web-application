import styles from './AccountCompany.module.css'
import { Header } from '../../components/header/Header_2'
import { Footer } from '../../components/footer/Footer'

export const AccountCompany = () =>{
    

    return(
        <div className={styles.page}>
            <Header/>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <hr></hr>
                        <h1>Профиль</h1>
                        <hr></hr>    
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

