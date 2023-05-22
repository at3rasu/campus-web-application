import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <button 
        onClick={notify} 
        className="auth-error"
        style={
          {fontFamily:"Inter", 
           fontWeight:"400",
           fontSize:"18px",
           border:"none",
           height:"45px",
           cursor:"pointer",
           background:"#EFEFEF",
           borderRadius:"1000px",
           color:"#333333",
           padding:"13px 25px"}
        }
        >{props.button}
      </button>
    </div>
    )
}