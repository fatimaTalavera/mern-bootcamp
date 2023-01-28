import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Registro = () => {

    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/signup', { name, lastname, email, password, confirmPassword }, {withCredentials:true})
            .then(res=> navigate('/'))
            .catch(err=> console.log(err))
    }
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>Sign Up</h1>
        <form onSubmit={submitHandler} className='col-6 mx-auto'>
            <label htmlFor=""  className='form-label'>Name:</label>
            <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor=""  className='form-label'>Lastname:</label>
            <input type="text" className='form-control' onChange={(e)=>setLastname(e.target.value)}/>
            <label htmlFor="" className='form-label'>Email:</label>
            <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}/>   
            <label htmlFor="" className='form-label'> Password</label>
            <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor="" className='form-label'> Confirm Password</label>
            <input type="password" className='form-control'onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button className='btn btn-success mt-3'> Submit</button>
        </form>
    </div>
  )
}

export default Registro