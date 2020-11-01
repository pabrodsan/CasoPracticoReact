import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Spinner } from 'reactstrap';
import './customer.scss';
import ModalForm from '../commons/modal/ModalForm';

const URL = 'http://localhost:3000/customers'

const Customer = () => {
    const [customers, setCustomers] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [costumerData, setCostumerData] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        
        axios.get(URL).then(res => {
            console.log(res);
            setLoading(false);
            setCustomers(res.data)
        })
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = customers.filter(customer => id !== customer.id)
            setCustomers(del)
        })
    }

    const updateData = (data) => {
        // const updateData = customers.find(customer => customer.id === id);
        axios.put(`${URL}/${data.id}`, data).then(res => {
            setOpenModal(false);
            getData();
        })
    }

    const openUpdateModal = (data) => {
        setCostumerData(data);
        setOpenModal(true);
    }

    const handleInputChange = (event) =>{
        setCostumerData({...costumerData, [event.target.name]: event.target.value});
      }

      // TODO mover a un componeten común Table
    const renderHeader = () => {
        let headerElement = ['id','Customer Name', 'email', 'ip', 'registered', 'acction']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return customers && customers.map(({ id, customerName, email, ip, registered }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{customerName}</td>
                    <td>{email}</td>
                    <td>{ip}</td>
                    <td>{registered}</td>
                    <td className='opration'>
                        <Button color="primary" onClick={() => openUpdateModal({ id, customerName, email, ip, registered })}>Update</Button>
                        <Button color="danger" onClick={() => removeData(id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {isLoading ? (<Spinner color="primary" />) : (
                <Table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </Table>
                )}
            
            <ModalForm 
                isOpen={openModal}
                toggle={() => setOpenModal(false)}
                updateData={updateData}
                data={costumerData}
                handleInputChange={handleInputChange}
            />
        </>
    )
}


export default Customer;