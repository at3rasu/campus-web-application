import { Context } from "../..";
import { useParams, useContext, useEffect } from "react"
import { observer } from 'mobx-react'
import { Header } from "../../components/header/Header";

export const VacancyDetails = observer(() =>{
    const {vacancyStore} = useContext(Context)
    const { id } = useParams()
    const vacancy = vacancyStore.getVacancyById(id)

    useEffect(() => {
        vacancyStore.getAllVacancies();
        }, [vacancyStore])
    if (!vacancy) {
        return <div>Loading...</div>
    }

    return(
        <div className="ListVac">
            <Header/>
            <div>
                <h2>{vacancy.nameVacancy}</h2>
            </div>
            <div>
                <p>{vacancy.companyDescription}</p>
                <p>Навыки: {vacancy.expectations}</p>
            </div>
        </div>
    )
})