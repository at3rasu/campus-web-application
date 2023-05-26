import { useEffect, useContext, useState } from "react"
import styles from  './Vacancy.module.css'
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { CardVacancy } from "../../components/card/CardVacancy"
import { Context } from "../.."
import { observer } from 'mobx-react'


export const Vacancy = observer(() =>{
    const filterVacancies = (searchText, vacancies) => {
        if (!searchText) {
            return vacancies;
        }
        return vacancies.filter(({ nameVacancy }) =>
            nameVacancy.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    useEffect(() => {
        document.title = 'Вакансии'
    })

    const {vacancyStore} = useContext(Context)
    useEffect(() => {
        vacancyStore.getAllVacancies()
    }, [vacancyStore])

    const data = vacancyStore.vacancies;
    const [searchTerm, setSearchTerm] = useState('');
    const [vacanciesList, setVacanciesList] = useState(data);


    useEffect(() => {
        const Debounce = setTimeout(() => {
        const filteredVacancies = filterVacancies(searchTerm, data);
        setVacanciesList(filteredVacancies);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    
    return(

        <div className="vacancy">
            <Header />
            <div className={styles.container}>
                <div className={styles.search}>
                    <div className={styles.inputSearch}>
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="search"
                            placeholder="Введите название вакансии..."></input>
                    </div>
                    <div className={styles.sortVacancy}>
                        <label>Найдено {data.length} вакансий</label>
                    </div>
                </div>
                <hr className={styles.hr}></hr>
                <div className={styles.vacancy}>
                    {vacanciesList.map((vacancy) => (
                        <CardVacancy key={vacancy.id} vacancy={vacancy}/>
                    ))}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
})