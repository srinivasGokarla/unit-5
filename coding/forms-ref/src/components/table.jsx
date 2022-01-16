import React from 'react';



 const Table = ({getdata}) => {
  const style = {
    marginLeft: "40px",
    border: "1px solid black",
   
     }
     const image = {
       width: "10%",
     }

      return(
        <div id="Table" style={style}>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Married</th>
            </tr>
            </thead>
            <tbody>
                {getdata.map((item)=>
                (
                    <tr key={item.id}>
                        <td id="name" >{item.name}</td>
                        <td>{item.age}</td>
                        <td id="add">{item.address}</td>
                        <td>{item.department}</td>
                        <td>{item.salary}</td>
                        <td>{item.isMarried === true }  </td>
                        <td>{item.notMarried === true ? "NotMarried" : "Married"}</td>
                        <td id="img" style={image} ><img src={item.photo} alt="itemimg" /> </td>
                    </tr>
                    )
                )}

             </tbody>
          </table>
        </div>
      );
    }

    export default Table