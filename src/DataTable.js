import React from 'react';
import './DataTable.css';

const DataTable = (props) => {
  return (
    <table className='data-table'>
      <thead>
        <tr>
          <th>Country</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.country}</td>
          <td>{props.data.confirmed.value}</td>
          <td>{props.data.recovered.value}</td>
          <td>{props.data.deaths.value}</td>
        </tr>
      </tbody>

    </table>
  )
}

export default DataTable
