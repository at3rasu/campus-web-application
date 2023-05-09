import './ChartCity.css'
import { useState } from 'react';
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    PieController,
    ArcElement
}from 'chart.js'

ChartJS.register(
    PieController,
    ArcElement
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
        ]

    }

    const createTableData = () => {
        const { labels, datasets } = chartCity
        const headerRow = ['Города']
        datasets.forEach((dataset) => {
          headerRow.push(dataset.label);
        })
        const dataRows = [];
        labels.forEach((label, index) => {
          const dataRow = [label];
          datasets.forEach((dataset) => {
            dataRow.push(dataset.data[index])
          })
          dataRows.push(dataRow);
        })
        return [headerRow, ...dataRows]
    }

    return(
        <div className='chart-city'>
            <table class="table">
                <thead>
                <tr>
                    {createTableData()[0].map((header) => (
                    <th key={header}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {createTableData().slice(1).map((row, index) => (
                    <tr key={index}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Pie data={chartCity} options={options}></Pie>
        </div>
    )
}