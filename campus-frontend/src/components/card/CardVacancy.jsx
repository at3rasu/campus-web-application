import { useContext } from 'react';
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { Context } from '../..';
import { info, success } from '../../utils/Consts';

export const CardVacancy = ({vacancy}) =>{
    const { store } = useContext(Context)
    return(
        <div className={styles.card}>

            <div className={styles.title}>
                <Link to={`/vacancies/${vacancy.id.toString()}`}>{vacancy.nameVacancy}</Link>
                
            </div>
            <div className={styles.content}>
                <p>{vacancy.nameCompany}</p>
                <p>{vacancy.companyDescription}</p>
                <p>{vacancy.fullAddress}</p>
            </div>
            <div className={styles.link}>
                {store.IsAuth ?(
                    <button
                        onClick={success}
                        >Подать заявку</button>
                ):(
                    <button 
                        onClick={info}
                        >Подать заявку</button>
                )}
            </div>
        </div>
    )
}