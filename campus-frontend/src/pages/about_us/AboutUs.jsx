import { Header } from "../../components/header/Header"
import './AboutUs.css'

export const AboutUs = () =>{
    return(
        <div className="AboutUs">
            <Header />
            <div className="aboutUs-content">
                <div className="title-aboutUs">
                    <h1>О нас</h1>
                    <p>Информационная система «Кампус»</p>
                </div>
                <div className="number-about">
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                </div>
                <div className="text-number">
                    <p>Поддержка высшего образования Свердловской области</p>
                    <p>Поддержка студентов Свердловской области</p>
                    <p>Стипендиальные и скидочные программы</p>
                </div>
                <div className="img-student">
                </div>
            </div>     
        </div> 
    )
}