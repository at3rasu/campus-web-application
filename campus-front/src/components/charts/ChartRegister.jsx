import { Line } from 'react-chartjs-2'
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
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [{
            data: [0, 5, 54, 10, 26, 76, 39],
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
            <Line data={data} options={options}></Line>
        </div>
    )
}