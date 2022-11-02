import React from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table" className='main_table'>
        <table>
          <tbody>
            <tr className='tr'>
              <th >Name</th>
              <th >Email</th>
              <th >Number</th>
              <th >City</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td className='td'>{item.name}</td>
                  <td className='td'>{item.email}</td>
                  <td className='td'>{item.number}</td>
                  <td className='td'>{item.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;