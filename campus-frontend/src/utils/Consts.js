import { toast } from "react-toastify";

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