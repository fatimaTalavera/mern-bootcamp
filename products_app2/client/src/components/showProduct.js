import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='container text-center'>
            <h1 className='mt-5 mb-3'>{product.title}</h1>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
        </div>
    )
}
export default ShowProduct;