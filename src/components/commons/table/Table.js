// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Table } from 'reactstrap';
// import './producto.scss';

// const URL = 'http://localhost:3000/customers'

// export default ({ data, removeData, headerElement }) => {
//     // const [customer, setCustomer] = useState([])

//     // useEffect(() => {
//     //     getData()
//     // }, [])

//     // const getData = async () => {
//     //     const response = await axios.get(URL)
//     //     setCustomer(response.data)
//     // }

//     // Como parametro de entrada
//     // const removeData = (id) => {

//     //     axios.delete(`${URL}/${id}`).then(res => {
//     //         const del = customer.filter(customer => id !== customer.id)
//     //         setCustomer(del)
//     //     })
//     // }

//     const renderHeader = () => {
//         // let headerElement = ['id','Customer Name', 'email', 'ip', 'registered', 'acction']

//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

//     const renderBody = () => {
//         return data && data.map(({ id, customerName, email, ip, registered }) => {
//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{customerName}</td>
//                     <td>{email}</td>
//                     <td>{ip}</td>
//                     <td>{registered}</td>
//                     <td className='opration'>
//                         <button className='button' onClick={() => removeData(id)}>Delete</button>
//                     </td>
//                 </tr>
//             )
//         })
//     }

//     return (
//         <>
//           <Table id='customers'>
//               <thead>
//                   <tr>{renderHeader()}</tr>
//               </thead>
//               <tbody>
//                   {renderBody()}
//               </tbody>
//           </Table>
//         </>
//     )
// }


