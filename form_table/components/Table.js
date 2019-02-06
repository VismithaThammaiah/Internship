import React from 'react';
import {Table} from 'reactstrap';
const Taable =({users,deleteRow,row}) => ( 
 
        <Table bordered>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Street</th>
              <th>City</th>
              <th>Pin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody> 
            
            {users.map((data,index) => (
              	<tr key={index} row={index} >
              	<td>{data.name}</td>
        
        		<td>{data.lname}</td>
        
        		<td>{data.email}</td>

        		<td>{data.pass}</td>

        		<td>{data.conpass}</td>

        		<td>{data.street}</td>

        		<td>{data.city}</td>

        		<td>{data.pin}</td>

	        	<td className="glyphicon glyphicon-trash" onClick={() => {deleteRow(row)}}></td>
               	 </tr>
                
                 
            ))}
                
          </tbody>
        </Table>
      
     
      
    );
  
  export default Taable;