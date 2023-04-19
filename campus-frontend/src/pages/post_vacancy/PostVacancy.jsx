import styles from './PostVacancy.module.css'

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { ExperienceSelection } from '../../components/experience_selection/ExperienceSelection'
import { EducationSelection } from '../../components/education_selection/EducationSelection'
import { useEffect, useState  } from "react"

export const PostVacancy = () =>{
    useEffect(() => {
        document.title = 'Опубликовать вакансию'
    })

    const [nameVacancy, setNameVacancy] = useState('')
    const [сompanyDescription, setCompanyDescription] = useState('')
    const [city, setCity] = useState('')
    const [vacancyDescription, setVacancyDescription] = useState('')
    const [image, setImage] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [keySkills, setKeySkills] = useState('')



    return(
        <div className="postVacancy">
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <hr></hr>
                    <h1>Разместить вакансию</h1>
                    <hr></hr>    
                </div>
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Заголовок</label>
                        <input
                            type='text'
                            value={nameVacancy}
                            onChange={(e) => setNameVacancy(e.target.value)}></input>
                        <p>Введите название должности</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Описание компании</label>
                        <input
                            type='text'
                            value={сompanyDescription} 
                            onChange={(e) => setCompanyDescription(e.target.value)}></input>
                        <p>Описание компании</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Описание вакансии</label>
                        <input
                            type='text'
                            value={vacancyDescription} 
                            onChange={(e) => setVacancyDescription(e.target.value)}></input>
                        <p>Опишите работу на должности:
                            Какие обязанности нужно выполнять?
                            Какие требования к стажеру?
                            Какими навыками необходимо владеть?</p>
                    </div>
                    <div className={styles.inputFile}>
                        <label>Изображения</label>
                        <input
                            type='file'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}></input>
                        <p>Добавьте медиафайлы для полного описания</p>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Город</label>
                        <input
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}></input>
                        <p>Место работы и контактные данные</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Полный адрес</label>
                        <input
                            type='text'
                            value={fullAddress}
                            onChange={(e) => setFullAddress(e.target.value)}></input>
                        <p></p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Телефон</label>
                        <input
                            type='text'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}></input>
                        <p></p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Почта</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <p></p>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Образование</label>
                        <EducationSelection />
                        <p>Требования к стажеру</p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Опыт работы</label>
                        <ExperienceSelection />
                        <p></p>
                    </div>
                    <div className={styles.inputData}>
                        <label>Ключевые навыки</label>
                        <input
                            type='text'
                            value={keySkills}
                            onChange={(e) => setKeySkills(e.target.value)}></input>
                        <p></p>
                    </div>
                    <div className={styles.buttonSubmit}>
                        <button
                            type='submit'><img src='/img/btn_logo.svg' alt='btn_logo'/> Разместить</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}