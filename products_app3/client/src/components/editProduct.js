import Form from './form'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
 
const EditProduct = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    
    const navigate = useNavigate()
    const redirect = event => navigate('/')


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(error => console.log(error))
    }, [])
    
    const saveData = (data) => {
        console.log('Saving...', data)
        axios.put(`http://localhost:8000/api/products/update/${id}`, data)
            .then(resp => {
                alert('Product was updated successfully.')
                redirect()
            })
            .catch(error => console.log(error))
    }
 
    return (
        <div className='container'>
            <h1 className='mt-5 mb-3'>Edit Product</h1>
            <Form handleSubmit={saveData} buttonTitle="Save" initialState={product}/>
        </div>
    )
}
export default EditProduct