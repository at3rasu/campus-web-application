import styles from './Footer.module.css'

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span>
                       <img src='/img/footer_logo.svg' alt='footer_logo'/> 
                    </span>  
                    <h3>Представленные материалы являются собственностью фонда «Кампус». © Кампус 2023</h3>
                    <div className={styles.link}>
                        <img src='/img/vk.svg' alt=''/>
                        <img src='/img/tg.svg' alt=''/>
                        <img src='/img/ok.svg' alt=''/>
                        <img src='/img/yandex.svg' alt=''/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.nav}>
                        <p>О нас</p>
                        <p>Контакты</p>
                        <p>Мероприятия</p>
                        <p>Новости</p>
                        <p>Партнёры</p>
                    </div>
                    <div className={styles.file}>
                        <p>Политика конфиденциальности</p>
                        <p>Пользовательское соглашение</p>
                        <p>Согласие на обработку персональных данных</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}