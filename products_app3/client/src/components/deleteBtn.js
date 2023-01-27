import axios from 'axios'

const DeleteBtn = ({ id, redirectFn }) => {
    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => redirectFn())
            .catch(err => console.log(err))
    }

    return (
        <button className='mx-1 btn btn-danger' onClick={deleteHandler}>Delete</button>
    )
}
export default DeleteBtn;