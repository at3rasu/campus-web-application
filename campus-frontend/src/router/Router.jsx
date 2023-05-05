import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main_page/MainPage";
import { SingIn } from "../pages/auth/SingIn";
import { RoleSelection } from "../pages/auth/RoleSelection";
import { SingUp } from "../pages/auth/SingUp";
import { SingUpCompany } from "../pages/auth/SingUpCompany";
import { AboutUs } from "../pages/about_us/AboutUs";
import { Statistics } from "../pages/statistics/Statistics";
import { CreateResume } from "../pages/resume/CreateResume";
import { Vacancy } from "../pages/vacancy/Vacancy";
import { PostVacancy } from "../pages/post_vacancy/PostVacancy";
import { ListVacancy } from "../pages/list_vacancy/ListVacancy";
import { Employers } from "../pages/employers/Employers";

export const Router = () =>{
    return(
        <div className="Router">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/SingIn" element={<SingIn />}/>
                    <Route path="/RoleSelection" element={<RoleSelection />}/>
                    <Route path="/SingUp" element={<SingUp />}/>
                    <Route path="/SingUpCompany" element={<SingUpCompany />}/>
                    <Route path="/AboutUs" element={<AboutUs />}/>
                    <Route path="/Statistics" element={<Statistics />}/>
                    <Route path="/CreateResume" element={<CreateResume />}/>
                    <Route path="/Vacancy" element={<Vacancy />}/>
                    <Route path="/PostVacancy" element={<PostVacancy />}/>
                    <Route path="/ListVacancy" element={<ListVacancy />}/>
                    <Route path="/Employers" element={<Employers />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}