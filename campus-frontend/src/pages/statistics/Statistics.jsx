import './Statistics.css'

import { MonthSelection } from '../../components/month_selection/MonthSelection'
import { Header } from '../../components/header/Header'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartCity } from '../../components/charts/ChartCity'
import { Footer } from '../../components/footer/Footer'
import { useEffect } from 'react'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Статистика'
    })

    return(
        <div className="Statistics">
            <Header />
            <h1 className="title-static">Статистика для инвесторов</h1>
            <div className='register-dynamics'>
                <p>Динамика регистраций за</p>
                <div className='mouth-select'>
                    <MonthSelection />
                </div>
                <button><img src='/img/unload.svg' alt='unload'/>Выгрузить</button>
            </div>
            <div className='chart'>
                <ChartRegister />
            </div>
            <div className='register-dynamics'>
                <p>Процент регистраций по городам за </p>
                <div className='mouth-select'>
                    <MonthSelection />
                </div>
                <button><img src='/img/unload.svg' alt='unload'/>Выгрузить</button>
            </div>
            <div className='chart1'>
                <ChartCity />    
            </div>    
            <div className='register-dynamics'>
                <p>Динамика регистраций за</p>
                <div className='mouth-select'>
                    <MonthSelection />
                </div>
                <button><img src='/img/unload.svg' alt='unload'/>Выгрузить</button>
            </div> 
            <Footer />
        </div>
    )
}

