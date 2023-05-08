import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthError.module.css'

export const AuthError = (props) =>{
  const notify = () => toast.error("Доступно только для авторизированных пользователей", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    return(
    <div>
      <button onClick={notify} className={styles.btn}>{props.button}</button>
    </div>
    )
}