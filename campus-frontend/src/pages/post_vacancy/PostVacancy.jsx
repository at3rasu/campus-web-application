import styles from './PostVacancy.module.css'

import { Header } from "../../components/header/Header_2"
import { Footer } from "../../components/footer/Footer"
// import { ExperienceSelection } from '../../components/experience_selection/ExperienceSelection'
// import { EducationSelection } from '../../components/education_selection/EducationSelection'
import { useEffect, useState  } from "react"
import { createVacancy } from '../../api/vacancy-api'
import { toast } from 'react-toastify'

export const PostVacancy = () =>{
    // const onChange = (file) => {
    //     const { files } = file.target;
    //     if (files && files.length !== 0) {
    //         setImage(files[0]);
    //     }
    // }
    useEffect(() => {
        document.title = 'Опубликовать вакансию'
    })

    const [nameVacancy, setNameVacancy] = useState('')
    const [nameCompany, setNameCompany] = useState('')
    const [companyDescription, setCompanyDescription] = useState('')
    const [duties, setDuties] = useState('')
    const [expectations, setExpectations] = useState('')
    const [skills, setSkills] = useState('')
    const [conditions, setConditions] = useState ('')
    const [fullAddress, setFullAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    // const [image, setImage] = useState();
    const image =undefined
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!number || !email || !skills || !nameCompany|| !nameVacancy
            || !companyDescription || !duties || !expectations || !conditions
            || !fullAddress) {
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
        setEmail('')
        setNameCompany('')
        setNameVacancy('')
        setCompanyDescription('')
        setDuties('')
        setExpectations('')
        setSkills('')
        setConditions('')
        setFullAddress('')
        setNumber('')

        if(number || email || skills || nameCompany|| nameVacancy
            || companyDescription || duties || expectations || conditions
            || fullAddress) {
        toast.success('Вы успешно опубликовали вакансию!', {
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

    
    const getTextAreaHeight = (text) => {
        const lineHeight = 30
        const lines = text.split('\n').length
        const minHeight = 50
        return `${Math.max(lines * lineHeight, minHeight)}px`;
    }

    return(
        <div className={styles.postVacancy}>
            <Header />
            <form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <hr></hr>
                    <h1>Публикация вакансии</h1>
                    <hr></hr>    
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Основная информация о компании</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Название компании</label>
                        <input
                            type='text'
                            value={nameCompany}
                            placeholder='Введите название компании'
                            onChange={(e) => setNameCompany(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Описание компании</label>
                        <input
                            type='text'
                            value={companyDescription} 
                            placeholder='Кратное описание компании'
                            onChange={(e) => setCompanyDescription(e.target.value)}></input>
                    </div>
                    {/* <div className={styles.inputFile}>
                        <label>Логотип компании</label>
                        <span className={styles.flex}>
                            <input
                                type='file'
                                onChange={onChange}></input>
                            <p className={styles.file}>Добавьте изображение в формате PNG</p>
                        </span>
                    </div> */}
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Основная информация о вакансии</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Название вакансии</label>
                        <input
                            type='text'
                            value={nameVacancy}
                            placeholder='Введите название вакансии'
                            onChange={(e) => setNameVacancy(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Обязанности стажера</label>
                        <textarea
                            type='text'
                            value={duties} 
                            placeholder='Введите обязанности стажера, для разделения текста воспользуйтесь символом новой строки(Enter)'
                            style={{ height: getTextAreaHeight(duties), resize:'none' }}
                            onChange={(e) => setDuties(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputData}>
                        <label>Ожидания от стажера</label>
                        <textarea
                            type='text'
                            value={expectations}
                            style={{ height: getTextAreaHeight(expectations), resize:'none' }} 
                            placeholder='Введите знания, которыми должен обладать стажер, для разделения текста воспользуйтесь символом новой строки(Enter)'
                            onChange={(e) => setExpectations(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputData}>
                        <label>Дополнительные знания</label>
                        <textarea
                            type='text'
                            value={skills} 
                            style={{ height: getTextAreaHeight(skills), resize:'none' }}
                            placeholder='Введите знания, которые будут плюсом к основным, для разделения текста воспользуйтесь символом новой строки(Enter)'
                            onChange={(e) => setSkills(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputData}>
                        <label>Условия работы</label>
                        <textarea
                            type='text'
                            value={conditions} 
                            style={{ height: getTextAreaHeight(conditions), resize:'none' }}
                            placeholder='Введите условия работы, для разделения текста воспользуйтесь символом новой строки(Enter)'
                            onChange={(e) => setConditions(e.target.value)}></textarea>
                    </div>
                </div>
                <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Контакты для связи</h2>
                <div className={styles.boxContent}>
                    <div className={styles.inputData}>
                        <label>Номер телефона</label>
                        <input
                            type='tel'
                            value={number}
                            placeholder="+7 (999) 999-99-99"
                            onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Адрес Email</label>
                        <input
                            type='email'
                            value={email}
                            placeholder='ivanov.ivan@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className={styles.inputData}>
                        <label>Полный адрес</label>
                        <input
                            type='tel'
                            value={fullAddress}
                            placeholder="Екатеринбург, улица Радищева, 28"
                            onChange={(e) => setFullAddress(e.target.value)}></input>
                    </div>
                </div>
                {/* <hr className={styles.hrData}></hr>
                <h2 className={styles.briefInfo}>Требования к стажеру</h2> */}
                <div className={styles.boxContent}>
                    {/* <div className={styles.inputData}>
                        <label>Образование</label>
                        <EducationSelection />
                    </div>
                    <div className={styles.inputData}>
                        <label>Опыт работы</label>
                        <ExperienceSelection />
                    </div> */}
                    <div className={styles.buttonSubmit}>
                        <button
                            type='submit'
                            onClick={ 
                                async () => {
                                await createVacancy (nameVacancy, nameCompany, companyDescription, duties,
                                    expectations, skills, conditions, image, fullAddress, number, email)
                                }
                            }
                        >Опубликовать вакансию</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}
