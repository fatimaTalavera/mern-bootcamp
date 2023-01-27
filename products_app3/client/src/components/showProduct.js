import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ShowProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    const navigate = useNavigate()
    const redirect = event => navigate('/')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(error => console.log(error))
    }, [])

    function deleteHandler () {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => redirect())
            .catch(err => console.log(err))
    }

    return (
        <div className='container text-center'>
            <h1 className='mt-5 mb-3'>{product.title}</h1>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>

            <div className='mt-3'>
                <Link to={`/products/edit/${id}`} className='mx-1 btn btn-success'>Edit</Link>
                <button className='mx-1 btn btn-danger' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}
export default ShowProduct;