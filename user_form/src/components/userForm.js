const UserForm = (props) => {
    const { getUser, setUser } = props;

    const onChange = (e) => {
        let user = {
            ...getUser,
            [e.target.name]: e.target.value
        };
        setUser(user);
    }

    return (
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text">First Name</span>
                <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={ onChange } />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last Name</span>
                <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={ onChange } />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="email" className="form-control" placeholder="Email" name="email" onChange={ onChange } />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={ onChange } />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Confirm Password</span>
                <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={ onChange } />
            </div>
        </form>
    )
}
export default UserForm;