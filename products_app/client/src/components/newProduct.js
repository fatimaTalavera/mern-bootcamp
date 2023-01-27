import Form from './form'
import axios from 'axios';
 
const NewProduct = (props) => {

    const saveData = (data) => {
        console.log('Saving...', data);
        axios.post('http://localhost:8000/api/products/new', data)
            .then(resp => alert('Product was created successfully.'))
            .catch(error => console.log(error))
    }
 
    return (
        <div className='container'>
            <h1 className='mt-5 mb-3'>New Product</h1>
            <Form handleSubmit={saveData} buttonTitle="Save"/>
        </div>
    )
}
export default NewProduct;