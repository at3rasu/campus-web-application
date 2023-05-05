import styles from './CreateResume.module.css'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ExperienceSelection } from '../../components/experience_selection/ExperienceSelection'
import { EducationSelection } from '../../components/education_selection/EducationSelection'
import { useEffect } from 'react'

export const CreateResume = () =>{
    useEffect(() => {
        document.title = 'Создать резюме'
    })

    return(
        <div className='resume-page'>
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <hr></hr>
                    <h1>Создать резюме</h1>
                    <hr></hr>    
                </div>  
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Основная информация о себе</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>ФИО<span>*</span></label>
                        <input
                            placeholder='Иванов Иван Иванович'
                            type='text'></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Номер телефона<span>*</span></label>
                        <input
                            placeholder="+7 (999) 999-99-99"
                            type='text'></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Город<span>*</span></label>
                        <input
                            placeholder="Екатеринбург"
                            type='text'></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>О себе</label>
                        <input
                            placeholder="Краткая информация о своих знаниях и достижениях"
                            type='text'></input>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Информация о своей специальности</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Специальность<span>*</span></label>
                        <input
                            placeholder="Frontend-разработчик"
                            type='text'></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Примеры работ<span>*</span></label>
                        <input
                            type='text'
                            placeholder='Cсылка...'></input>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Основная информация об образование</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Образование<span>*</span></label>
                        <EducationSelection />
                    </div>
                    <div className={styles.inputData}>
                        <label>Опыт</label>
                        <ExperienceSelection />
                    </div>
                    <div className={styles.inputData}>
                        <label>Учебное заведение</label>
                        <input
                            placeholder="Уральский федеральный университет имени первого президента России Б. Н. Ельцина"
                            type='text'></input>
                    </div>            
                    <div className={styles.buttonSubmit}>
                        <button
                            type='submit'>Опубликовать резюме</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}