import styles from './Footer.module.css'

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src='/img/footer_logo.svg' alt='footer_logo'/>
                    <h3>Представленные материалы являются собственностью фонда «Кампус». © Кампус 2023</h3>
                    <div className={styles.link}>
                        <img src='/img/vk.svg' alt=''/>
                        <img src='/img/tg.svg' alt=''/>
                        <img src='/img/ok.svg' alt=''/>
                        <img src='/img/yandex.svg' alt=''/>
                    </div>
                </div>
            </div>
        </footer>
    )
}