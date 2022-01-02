import React from 'react';

import Form from './form';

export default class Table extends Form {
  render(){
      return(
        <div id="Table">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Married</th>
            </tr>
            <tr>
              <td>a</td>
              <td></td>
            </tr>

          </table>
        </div>
      );
    }

}