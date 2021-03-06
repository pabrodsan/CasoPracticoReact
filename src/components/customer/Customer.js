import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Spinner  } from 'react-bootstrap';
import './customer.scss';
import ModalForm from '../commons/modal/ModalFormCustomer';
import moment from 'moment';
import localIpUrl from 'local-ip-url'
import GenericAlert from '../commons/GenericAlert';

const URL = 'http://localhost:3000/customers'

const Customer = () => {
    const [customers, setCustomers] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [costumerData, setCostumerData] = useState({})
    const [isLoading, setLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(undefined);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(URL)
        .then(res => {
            setCustomers(res.data)
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
        
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = customers.filter(customer => id !== customer.id)
            setCustomers(del)
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
    }

    const updateCustomer = (data) => {
        // const updateData = customers.find(customer => customer.id === id);
        axios.put(`${URL}/${data.id}`, data).then(res => {
            setOpenModal(false);
            getData();
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
    }

    const addCustomer = (data) => {
        data.ip = localIpUrl('public', 'ipv4');
        data.registered = moment().format('YYYY-MM-DD');
        axios.post(`${URL}`, data).then(res => {
            setOpenModal(false);
            getData();
            
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => setLoading(false))
    }

    const openUpdateModal = (data, isUpdate) => {
        setCostumerData(data);
        setOpenModal(true);
        setIsUpdate(isUpdate)
    }

    const handleInputChange = (event) =>{
        setCostumerData({...costumerData, [event.target.name]: event.target.value});
    }
 
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
                    <td style={{ textAlign:"start" }}>
                        <Button variant="primary" style={{marginRight: '1rem'}} onClick={() => openUpdateModal({ id, customerName, email, ip, registered }, true)}>Update</Button>
                        <Button variant="danger" onClick={() => removeData(id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {isLoading ? (
            <div className={"spinnerTextLoading"}>
                <Spinner className={"spinnerSize"} animation="border" variant="secondary"/>
                <text>Loading....</text>
            </div>
            ) : (
                !showError &&
                <>
                    {/* {renderAlert()} */}
                    <Table id="rwd-table">
                        <thead>
                            <tr>{renderHeader()}</tr>
                        </thead>
                        <tbody>
                            {renderBody()}
                        </tbody>
                    </Table>
                    <Button variant="success" className={"buttonAdd"} onClick={() => openUpdateModal({}, false)}>Add customer</Button>
                </>
            )}

            {showError ? (
                <GenericAlert/>
            ): null}

            <ModalForm 
                isOpen={openModal}
                toggle={() => setOpenModal(false)}
                acctionData={isUpdate ? updateCustomer : addCustomer}
                isUpdate={isUpdate}
                data={costumerData}
                handleInputChange={handleInputChange}
            />
        </>
    )
}


export default Customer;