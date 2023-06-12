import { Header2, Footer } from '../index'
import styles from './Employers.module.css'
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../.."
import { notify } from "../../utils/Consts"

export const Employers = () =>{
    useEffect(() => {
        document.title = 'Главная страница'
    })

    const {store} = useContext(Context)
    const navigate = useNavigate()

    return(
        <div className={styles.page}>
            <Header2 />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1>Разместите</h1>  
                        <h1>вакансию на «Кампусе»</h1> 
                        <p>Тысячи студентов и стажеров со всей области в поисках своего начинания.</p>
                        <p>Они готовы пойти к вам, чтобы создавать общее будущее. </p>
                    </div>
                    {store.IsAuthCompany ?(
                        <div className={styles.btn}>
                            <button
                                onClick={() => navigate('/PostVacancy')}>Опубликовать вакансию</button>
                        </div>
                    ):(
                        <div className={styles.btn}>
                            <button
                                onClick={notify}>Опубликовать вакансию</button>
                        </div>
                    )}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}