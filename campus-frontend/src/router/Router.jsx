import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main_page/MainPage";
import { SingIn } from "../pages/auth/SingIn";
import { SingUp } from "../pages/auth/SingUp";
import { SingUpCompany } from "../pages/auth/SingUpCompany";
import { AboutUs } from "../pages/about_us/AboutUs";
import { Statistics } from "../pages/statistics/Statistics";
import { CreateResume } from "../pages/resume/CreateResume";
import { Vacancy } from "../pages/vacancy/Vacancy";
import { PostVacancy } from "../pages/post_vacancy/PostVacancy";
import { VacancyDetails } from "../pages/vacancy_details/VacancyDetails";
import { Employers } from "../pages/employers/Employers";
import { PersonalAccount } from "../pages/personal_account/PersonalAccount";
import { AccountCompany } from "../pages/personal_account/AccountCompany";
import { SingInCompany } from "../pages/auth/SingInCompany";
import { UserResume } from "../pages/user_resume/UserResume";
import { Error404 } from "../components/error/Error404";
import { PrivateRouteCompany, PrivateRouteUser } from "../utils/Consts";


export const Router = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<MainPage />}/>
            <Route element={<PrivateRouteUser />}>
                <Route path="/CreateResume" element={<CreateResume />}/>
                <Route path="/PersonalAccount" element={<PersonalAccount />}/>
                <Route path="/UserResume" element={<UserResume />}/>
            </Route>
            <Route path="/Employers" element={<Employers />}/>
            <Route element={<PrivateRouteCompany />}>
                <Route path="/PostVacancy" element={<PostVacancy />}/>
                <Route path="/AccountCompany" element={<AccountCompany />}/>
            </Route> 
            <Route path="/Vacancy" element={<Vacancy />}/>
            <Route path="/vacancies/:id" element={<VacancyDetails />}/>
            <Route path="/SingIn" element={<SingIn />}/>
            <Route path="/SingInCompany" element={<SingInCompany />}/>
            <Route path="/SingUp" element={<SingUp />}/>
            <Route path="/SingUpCompany" element={<SingUpCompany />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/Statistics" element={<Statistics />}/>
            <Route path="/*" element={<Error404 />}/>
        </Routes>
    )
}
