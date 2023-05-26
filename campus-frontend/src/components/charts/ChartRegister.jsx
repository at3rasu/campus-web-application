import { Line } from 'react-chartjs-2'
import styles from './ChartRegister.module.css'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
}from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const ChartRegister = () =>{
    const data = {
        labels: ["Сен.", "Окт.", "Ноя.", "Дек.", "Янв.", "Фев."],
        datasets: [{
            data: [ 24, 38, 45, 56, 61, 81, 91], 
            fill: true, // Закрасить область под линией данных
            backgroundColor: 'rgba(245, 45, 48, 0.21)'
        }]
    }
    const options = {
        borderColor: '#F27E80',
        pointBorderColor: '#F27E80',
        pointRadius: 4,
        pointBackgroundColor: '#F27E80',
        scales: {
            y: {
                ticks: {
                    stepSize: 25
                } 
            }
        }
    }

    return(
        <div className={styles.box}>
            <h1>Динамика регистраций</h1>
            <div className={styles.chart}>
                <Line data={data} options={options} ></Line>    
            </div> 
            <p>Всего: 336</p>
        </div>
    )
}