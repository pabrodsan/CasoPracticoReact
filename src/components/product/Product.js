import React, { useState, useEffect } from 'react'
import client from '../../apollo/ApolloCliente';
import * as queries from '../../apollo/query/index';
import * as mutations from '../../apollo/mutation/index';
import ModalForm from '../commons/modal/ModalFormProduct';
import { Table, Button, Spinner } from 'react-bootstrap';
import './product.scss';
import GenericAlert from '../commons/GenericAlert';

const Product = () => {

    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(undefined);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        client.query({
            query: queries.queryGetAllProducts
          }).then(res => {
            setProducts(res.data.allProducts)
          })
          .catch(error => {
            setShowError(true)
          })
          .finally(() => setLoading(false))
    }

    const addProduct = (data) => {
        client.mutate({
            mutation: mutations.addProduct,
            variables:{
                productName: data.productName,
                price: data.price
            }
        }).then(res => {
            setProducts([...products, res.data.addProduct])
            setOpenModal(false);
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
    }

    const removeProduct = (id) => {
        client.mutate({
            mutation: mutations.removeProduct,
            variables:{
                id: id
            }
        }).then(res => {
            const productsUpdate = products.filter(e => e.id !== id)
            setProducts(productsUpdate)
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
    }

    const updateProduct = (data) => {
        client.mutate({
            mutation: mutations.updateProduct,
            variables:{
                id: data.id,
                productName: data.productName,
                price: data.price
            }
        }).then(res => {
            const resProduct = res.data.updateProduct;
            console.log(resProduct)
            // const productUpdate = products.find(e => e.id === data.id);
            const productsUpdate = products.map(product => {
                if (product.id === resProduct.id) {
                    return {
                        id: resProduct.id,
                        productName: resProduct.productName,
                        price: resProduct.price
                    }
                } else {
                    return {...product}
                }

            })
            setProducts(productsUpdate);
            setOpenModal(false);
        })
        .catch(error => {
            setShowError(true)
        })
        .finally(() => {setLoading(false)})
    }

    const openUpdateModal = (data, isUpdate) => {
        setSingleProduct(data);
        setIsUpdate(isUpdate);
        setOpenModal(true);
    }

    const handleInputChange = (event) =>{
        setSingleProduct({...singleProduct, [event.target.name]: event.target.value});
    }

    const renderHeader = () => {
        let headerElement = ['Product Name', 'Price ($)', 'acctions']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return products && products.map(({ id, productName, price }) => {
            return (
                <tr key={id}>
                    <td>{productName}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <Button variant="primary" style={{marginRight: '1rem'}} onClick={() => openUpdateModal({id, productName, price}, true)} >Update</Button>
                        <Button variant="danger" onClick={() => removeProduct(id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {isLoading ? (<Spinner animation="border" variant="secondary"/>) : (
                !showError &&
                    <>
                        <Table id='rwd-table'>
                            <thead>
                                <tr>{renderHeader()}</tr>
                            </thead>
                            <tbody className={"tbody"}>
                                {renderBody()}
                            </tbody>
                        </Table>
                        <Button variant="success" className={"buttonAdd"} onClick={() => openUpdateModal({}, false)}>Add product</Button>
                    </>
                )
            }
            {showError ? (
                <GenericAlert/>
            ): null}
                        
            <ModalForm 
                isOpen={openModal}
                toggle={() => setOpenModal(false)}
                acctionData={isUpdate ? updateProduct : addProduct}
                isUpdate={isUpdate}
                data={singleProduct}
                handleInputChange={handleInputChange}
            />
        </>
    )


}
export default Product