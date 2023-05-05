import { Line } from 'react-chartjs-2'
import './ChartRegister.css'
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
        labels: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
        datasets: [{
            data: [25, 29, 31, 38, 46, 50, 56, 61, 75, 81],
        }]
    }
    const options = {
        borderColor: 'red',
        pointBorderColor: 'red',
        pointRadius: 5,
        pointBackgroundColor: 'white',
    }

    return(
        <div className='chart-register'>
            <Line data={data} options={options} ></Line>
        </div>
    )
}