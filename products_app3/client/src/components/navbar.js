import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const redirect = route => navigate(route || '/')

    const logout = e => {
        e.preventDefault()
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => redirect('/login'))
            .catch(error => console.log(error))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link" onClick={logout} aria-current="page" href="#">Log out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar