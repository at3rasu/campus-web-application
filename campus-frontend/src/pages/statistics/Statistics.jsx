import styles from './Statistics.module.css'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartCity } from '../../components/charts/ChartCity'
import { useEffect, useState } from 'react'
import { Table } from '../../components/charts/Table'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Инфопанели'
    })

    return(
        <div className={styles.page}>
            <header className={styles.header}>
                <h1>Инфопанели</h1>
            </header>
            <div className={styles.chart}>
               <ChartRegister /> 
               <ChartCity /> 
               <ChartRegister /> 
            </div>
        </div>
    )
}

