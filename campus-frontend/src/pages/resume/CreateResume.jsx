import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Header, Footer } from '../index'
import { createResume } from '../../api/resume-api'
import styles from './CreateResume.module.css'

export const CreateResume = () =>{
    useEffect(() => {
        document.title = 'Создать резюме'
    })

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [aboutYou, setAboutYou] = useState('')
    const [vacancy, setVacancy] = useState('')
    const [workExamples, setWorkExamples] = useState('')
    const [educational, setEducational] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Проверка заполнения всех полей
        if (!number || !name || !city || !aboutYou|| !vacancy
            || !workExamples || !educational) {
            toast.error('Пожалуйста, заполните все поля!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
          return
        }
        setName('')
        setCity('')
        setAboutYou('')
        setVacancy('')
        setWorkExamples('')
        setEducational('')
        setNumber('')

        if(number || name || city || aboutYou|| vacancy
            || workExamples || educational) {
        toast.success('Вы успешно разместили резюме!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return
        }
      }

    return(
        <div className={styles.page}>
            <Header />
            <form className={styles.container} onSubmit={handleSubmit}>
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
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Номер телефона<span>*</span></label>
                        <input
                            placeholder="+7 (999) 999-99-99"
                            type='text'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Город<span>*</span></label>
                        <input
                            placeholder="Екатеринбург"
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>О себе</label>
                        <input
                            placeholder="Краткая информация о своих знаниях и достижениях"
                            type='text'
                            value={aboutYou}
                            onChange={(e) => setAboutYou(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Учебное заведение</label>
                        <input
                            placeholder="Уральский федеральный университет имени первого президента России Б. Н. Ельцина"
                            type='text'
                            value={educational}
                            onChange={(e) => setEducational(e.target.value)}></input>
                    </div> 
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Информация о своей специальности</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Специальность<span>*</span></label>
                        <input
                            placeholder="Frontend-разработчик"
                            type='text'
                            value={vacancy}
                            onChange={(e) => setVacancy(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Примеры работ<span>*</span></label>
                        <input
                            type='text'
                            placeholder='Cсылка...'
                            value={workExamples}
                            onChange={(e) => setWorkExamples(e.target.value)}></input>
                    </div>
                </div>
                <div className={styles.boxContent}>           
                    <div className={styles.buttonSubmit}>
                        <button
                            type='submit' onClick={
                                async () => {
                                    await createResume (name, number, city, aboutYou, vacancy, workExamples, educational)
                                    }
                            }>Опубликовать резюме</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}