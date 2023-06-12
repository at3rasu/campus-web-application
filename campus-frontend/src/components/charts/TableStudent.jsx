import { useMemo } from 'react'
import { useTable, useFilters  } from 'react-table'
import styles from './Table.module.css'

export const TableStudent = () => {

  const data = useMemo(
    () => [
      { name: 'Иманкулов Артур Александрович', direc: "Программная инженерия", edu: 'УрФУ', point: 222 },
      { name: 'Обухов Даниил Александрович', direc: "Информатика и вычислительная техника", edu: 'УрГУПС', point: 221 },
      { name: 'Маканков Павел Евгеньевич', direc: "Прикладная информатика", edu: 'УрФУ', point: 220 },
      { name: 'Белова Дарья Андреевна', direc: "Информатика и вычислительная техника", edu: 'УрФУ', point: 210 },
      { name: 'Токарев Алексей Андреевна', direc: "Программная инженерия", edu: 'УрФУ', point: 205 },
    ],[]
  )

  const columns = useMemo(
    () => [
      { Header: 'ФИО', accessor: 'name' },
      { Header: 'Направление', accessor: 'direc' },
      { Header: 'ВУЗ', accessor: 'edu' },
      { Header: 'Балл', accessor: 'point' },
    ],[]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters)

  const handleFilterChange = (e, columnId) => {
    const value = e.target.value || undefined
    setFilter(columnId, value)
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h1>Рейтинг студентов</h1>
      </div>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse' }} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                  <div>
                    <input
                      type="text"
                      onChange={(e) => handleFilterChange(e, column.id)}
                      style={{ marginTop: '4px' }}
                      placeholder='Поиск'
                    />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.btn}>
        <p>Всего: 5</p>
        <button>Показать полностью</button>
      </div>
    </div>
  )
}
