import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () =>{
    const navigate = useNavigate()

    return(
        <div className="header-singIn">
            <div className="header-logo">
                <Link to='/'><img src='/img/logo_header.svg' alt='logo_header'/></Link> 
            </div>
            <div className="navLink">
                <Link to='/AboutUs'>О нас</Link>
                <Link to='/Vacancy'>Вакансии</Link>
                <Link to='/CreateResume'>Создать резюме</Link>
            </div>
            <div className="search-button">
                <img src='/img/search_logo.svg' alt='search_logo'/>
                <button className="srh-btn">Поиск</button>
            </div>
            <div className="header-singIn-btn">
                <button onClick={() => navigate('/SingIn')}>Войти</button>
            </div>                
        </div>
    )
}