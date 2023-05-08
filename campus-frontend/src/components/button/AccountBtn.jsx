import { useNavigate } from 'react-router-dom'
import styles from './AccountBtn.module.css'

export const AccountBtn = (props) =>{
    const navigate = useNavigate()

    return(
        <>
            <div className={styles.btn}>
                <button onClick={() => navigate(props.account)}>Личный кабинет</button>
            </div>  
        </>
    )
}