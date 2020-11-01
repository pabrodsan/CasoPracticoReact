import React, { useState, useEffect } from 'react'
import client from '../../apollo/ApolloCliente';
import * as queries from '../../apollo/query/index';
import * as mutations from '../../apollo/mutation/index';
// import ModalForm from '../commons/modal/ModalForm';
import { Table, Button, Spinner } from 'reactstrap';

const Product = () => {

    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setLoading] = useState(true);

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

    const addProduct = () => {
        client.mutate({
            mutation: mutations.addProduct,
            variables:{
                productName: 'Mesa',
                price: 800
            }
        }).then(res => {
            setProducts([...products, res.data.addProduct])
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
            console.log(res.data.addProduct);
        })
    }

    const renderHeader = () => {
        let headerElement = ['Product Name', 'Price', 'acctions']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return products && products.map(({ id, productName, price, actions }) => {
            return (
                <tr key={id}>
                    <td>{productName}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <Button color="primary" >Update</Button>
                        <Button color="danger">Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {isLoading ? (<Spinner color="primary" />) : (
                <>
                    <Button color="success" onClick={() => addProduct()}>Add customer</Button>{' '}
                    <Table id='employee'>
                        <thead>
                            <tr>{renderHeader()}</tr>
                        </thead>
                        <tbody>
                            {renderBody()}
                        </tbody>
                    </Table>
                </>
            )}
            {/*             
            <ModalForm 
                isOpen={openModal}
                toggle={() => setOpenModal(false)}
                updateData={updateData}
                addData={addData}
                data={singleProduct}
                handleInputChange={handleInputChange}
            /> */}
        </>
    )


}
export default Product