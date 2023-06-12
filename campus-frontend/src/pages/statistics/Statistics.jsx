import styles from './Statistics.module.css'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartCity } from '../../components/charts/ChartCity'
import { Table } from '../../components/charts/Table'
import { useEffect } from 'react'
import { TableStudent } from '../../components/charts/TableStudent'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Статистика фонда'
    })

    return(
        <div className={styles.page}>
            <header className={styles.header}>
                    <h1>Инфопанели</h1>
            </header>
            <div className={styles.container}>
                <div className={styles.chart}>
                    <div className={styles.table}>
                        <ChartRegister /> 
                        <ChartCity />
                    </div>
                    <div className={styles.table}> 
                        <Table />
                        <TableStudent />
                    </div>
                </div>
            </div>
        </div>
    )
}

