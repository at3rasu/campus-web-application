import { useContext, useEffect } from "react"
import { CardResume } from "../../components/card_resume/CardResume"
import { observer } from 'mobx-react'
import { Context } from "../.."
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"

export const UserResume = observer(() =>{
    const {resumeStore} = useContext(Context)
    useEffect(() => {
        resumeStore.getResumeByUser()
    }, [resumeStore])

    return(
        <>  
            <Header />
                <div className="container" style={{minHeight:'calc(100vh - 120px)'}}>
                    {resumeStore.resume.map((resume) => (
                        <CardResume key={resume.id} resume={resume} />
                    ))}
                </div>
            <Footer/>
        </>
    )
})