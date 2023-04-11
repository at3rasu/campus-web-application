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
                    <h1>Резюме</h1>
                    <hr></hr>    
                </div>  
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>ФИО<span>*</span></label>
                        <input
                            type='text'></input>
                        <p>Ваши контактные данные, чтобы работодатель смог с вами связаться</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Телефон<span>*</span></label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Город<span>*</span></label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                    <div className={styles.inputData}>
                        <label>О себе</label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Специальность<span>*</span></label>
                        <input
                            type='text'></input>
                        <p>Стажировка, на которую вы бы хотели устроиться</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Примеры работ<span>*</span></label>
                        <input
                            type='text'
                            placeholder='Cсылка...'></input>
                        <p></p>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Образование<span>*</span></label>
                        <EducationSelection />
                        <p>Ваше образование</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Опыт</label>
                        <ExperienceSelection />
                    </div>
                    <div className={styles.inputData}>
                        <label>Учебное заведение</label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>            
                    <div className={styles.buttonSubmit}>
                        <button
                            type='submit'><img src='/img/btn_logo.svg' alt='btn_logo'/> Опубликовать</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}