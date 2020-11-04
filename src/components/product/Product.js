import React, { useState, useEffect } from 'react'
import client from '../../apollo/ApolloCliente';
import * as queries from '../../apollo/query/index';
import * as mutations from '../../apollo/mutation/index';
import ModalForm from '../commons/modal/ModalFormProduct';
import { Table, Button, Spinner } from 'react-bootstrap';
import NavBar from '../commons/NavBar';
import './product.scss';

const Product = () => {

    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(undefined);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        client.query({
            query: queries.queryGetAllProducts
          }).then(res => {
            setProducts(res.data.allProducts)
            setLoading(false)
          })
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
            console.log(res.data.addProduct);
        })
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
                        <Button color="primary" style={{marginRight: '1rem'}} onClick={() => openUpdateModal({id, productName, price}, true)} >Update</Button>
                        <Button color="danger" onClick={() => removeProduct(id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {isLoading ? (<Spinner color="primary"/>) : (
                <>
                    <NavBar/>
                    <Table id='product'>
                        <thead>
                            <tr>{renderHeader()}</tr>
                        </thead>
                        <tbody className={"tbody"}>
                            {renderBody()}
                        </tbody>
                    </Table>
                    <Button color="success" onClick={() => openUpdateModal({}, false)}>Add product</Button>

                </>
            )}
                        
            <ModalForm 
                isOpen={openModal}
                toggle={() => setOpenModal(false)}
                // updateData={updateProduct}
                // addData={addProduct}
                acctionData={isUpdate ? updateProduct : addProduct}
                data={singleProduct}
                handleInputChange={handleInputChange}
            />
        </>
    )


}
export default Product