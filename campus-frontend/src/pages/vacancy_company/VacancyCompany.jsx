import { useContext, useEffect } from "react"
import { Header } from "../../components/header/Header_2"
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
            <Header />
            {vacancyStore.vacancies.map((vacancy) => (
                <VacancyByUser key={vacancy.id} vacancy={vacancy}/>
            ))}
        </>
    )
})