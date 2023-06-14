import { toast } from "react-toastify";
import { useContext } from "react";
import { Context } from "..";
import { Error403 } from "../components/error/Error403";
import { Outlet } from "react-router-dom";

export const notify = () => toast.error("Доступно только для авторизированных пользователей", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
})

export const info = () => toast.info("Чтобы откликнуться на вакансию авторизуйтесь!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})

export const PrivateRouteCompany = () =>{
    const {store} = useContext(Context)
    const route = '/'
    return (
        store.IsAuthCompany ? <Outlet /> : <Error403 route={route}/>
    )
}

export const PrivateRouteUser = () =>{
    const {store} = useContext(Context)
    const route = '/Employers'

    return (
        store.IsAuth ? <Outlet /> : <Error403 route={route}/>
    )
}

export const getTextAreaHeight = (text) => {
    const lineHeight = 30
    const lines = text.split('\n').length
    const minHeight = 50
    return `${Math.max(lines * lineHeight, minHeight)}px`;
}

