import styles from './ChartCity.module.css'
import { useState } from 'react';
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    PieController,
    ArcElement,
    Title, 
    Legend
}from 'chart.js'

ChartJS.register(
    PieController,
    ArcElement, 
    Title, 
    Legend
)

export const ChartCity = () =>{
    const [chartCity] = useState({
        labels: ['Екатеринбург', 'Красноуральск', 'Кировград', 'Верхняя пышма', 'Новоуральск', 'Другие'],
        datasets: [
          {
            label: 'Процент',
            data: [48, 15, 28, 4, 23, 2]
          }
        ]
      })

    const options = {
        legend: {
            display: true,
            position: "left"
        },
        borderColor: 'white',
        pointBorderColor: 'red',
        pointRadius: 5,
        backgroundColor: [
            "#F52D30",
            "#82A2CD",
            "#BF68A6",
            "#78B27C",
            "#F3B200",
            "#8269EF"
        ],
    }

    return(
        <div className={styles.box}>
            <h1>Статистика всех студентов</h1>
            <div className={styles.chart}>
                <Pie  data={chartCity} options={options}></Pie>
            </div> 
        </div>
    )
}