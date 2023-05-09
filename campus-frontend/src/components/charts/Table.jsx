import './Table.css'

export const Table = () =>{
    return(
        <>
            <table class="table1">
                <thead>
                    <tr>
                        <th>Позиция</th>
                        <th>ФИО</th>
                        <th>Город</th>
                        <th>Учебное заведение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Иманкулов Артур Александрович</td>
                        <td>Екатеринбург</td>
                        <td>Урфу</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Обухов Даниил Александрович</td>
                        <td>Екатеринбург</td>
                        <td>Урфу</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Маканков Павел Евгенеевич</td>
                        <td>Екатеринбург</td>
                        <td>Урфу</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}