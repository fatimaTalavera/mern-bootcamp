import Form from './form'
import ListProducts from './listProducts'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
 
const NewProduct = (props) => {
    const navigate = useNavigate()
    const redirect = event => navigate(0)

    const saveData = (data, dispatch) => {
        console.log('Saving...', data)
        axios.post('http://localhost:8000/api/products/new', data)
            .then(resp => {
                alert('Product was created successfully.')
                redirect()
            })
            .catch(error => {
                console.log(error)
                error = error.response.data.errors
                Object.keys(error).map(key => dispatch(
                    {type: key, payload: {value: error[key].value, error: error[key].message}
                }))
            })
    }
 
    return (
        <div className='container'>
            <h1 className='mt-5 mb-3'>New Product</h1>
            <Form handleSubmit={saveData} buttonTitle="Save"/>
            <ListProducts/>
        </div>
    )
}
export default NewProduct;