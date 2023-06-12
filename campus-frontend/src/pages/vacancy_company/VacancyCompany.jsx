import { useContext, useEffect } from "react"
import { Header2, Footer } from '../index'
import { Context } from "../.."
import { VacancyByUser } from "../../components/card_vacancy_company/VacancyByUser"
import { observer } from "mobx-react"

export const VacancyCompany = observer(() =>{
    const {vacancyStore} = useContext(Context)
    useEffect(() => {
        vacancyStore.getVacanciesByUser()
    }, [vacancyStore])

    return(
        <>
            <Header2 />
            {vacancyStore.vacancies.map((vacancy) => (
                <VacancyByUser key={vacancy.id} vacancy={vacancy}/>
            ))}
            <Footer />
        </>
    )
})