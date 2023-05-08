import { Context } from "../..";
import { useParams, useContext } from "react"
import { observer } from 'mobx-react'

export const VacancyDetails = observer(() =>{
    const {vacancyStore} = useContext(Context)
    const { id } = useParams()
    const vacancy = vacancyStore.getVacancyById(id)

    if (!vacancy) {
        return <div>Loading...</div>
    }

    return(
        <div className="ListVac">
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