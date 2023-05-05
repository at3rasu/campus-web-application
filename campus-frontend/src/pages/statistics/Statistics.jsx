import './Statistics.css'

import { Header } from '../../components/header/Header'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartCity } from '../../components/charts/ChartCity'
import { Footer } from '../../components/footer/Footer'
import { useEffect, useState } from 'react'

export const Statistics = () => {
    const [student] = useState('336')

    useEffect(() => {
        document.title = 'Статистика'
    })

    return(
        <div className="Statistics">
            <Header />
            <h1 className="title-static">Статистика для инвесторов</h1>
            <div className='register-dynamics'>
                <p>Динамика регистраций за последний месяц</p>
                <button>Выгрузить</button>
            </div>
            <div className='chart'>
                <ChartRegister />
                <p>Всего зарегистрировано: {student}</p>
            </div>
            <div className='register-dynamics'>
                <p>Процент регистраций по городам за все время</p>
                <button>Выгрузить</button>
            </div>
            <div className='chart1'>
                <ChartCity />    
            </div>    
            <div className='register-dynamics'>
                <p>Получатели стипендиальной поддержки</p>
                <button>Выгрузить</button>
            </div> 
            <Footer />
        </div>
    )
}

