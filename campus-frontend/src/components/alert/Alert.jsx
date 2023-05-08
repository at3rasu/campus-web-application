import { ToastContainer } from "react-toastify"

export const Alert = () =>{
    return(
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{width: "500px", fontSize:'18px'}}
        />
    )
}