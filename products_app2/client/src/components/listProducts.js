import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListProducts = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.products))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='container text-center'>
            <h1 className='mt-5 mb-3'>All Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pr, index) => {
                        return (<tr key={index}>
                            <th>{pr.title}</th>
                            <th><Link to={`/products/${pr._id}`}>Show</Link></th>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListProducts;