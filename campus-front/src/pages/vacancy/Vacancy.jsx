import { useEffect } from "react"
import './Vacancy.css'

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"

export const Vacancy = () =>{
    useEffect(() => {
        document.title = 'Вакансии'
    })
    
    return(
        <div className="vacancy">
            <Header />
            <div className="vacancy-content">
                <h1>Вакансии</h1>
            </div>
            <Footer />
        </div>
    )
}