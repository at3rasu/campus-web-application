import styles from './ChartCity.module.css'
import { useState } from 'react';
import { Doughnut  } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    PieController,
    ArcElement,
}from 'chart.js'

ChartJS.register(
    PieController,
    ArcElement, 
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
            <div className={styles.chart}>
                <Doughnut  data={chartCity} options={options}></Doughnut>
            </div> 
        </div>
    )
}