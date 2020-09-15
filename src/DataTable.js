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
          <td>World</td>
          <td>{props.data.world.confirmed.value}</td>
          <td>{props.data.world.recovered.value}</td>
          <td>{props.data.world.deaths.value}</td>
        </tr>
        <tr>
          <td>Singapore</td>
          <td>{props.data.singapore.confirmed.value}</td>
          <td>{props.data.singapore.recovered.value}</td>
          <td>{props.data.singapore.deaths.value}</td>
        </tr>
      </tbody>

    </table>
  )
}

export default DataTable
