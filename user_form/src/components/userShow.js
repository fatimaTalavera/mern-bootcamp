const UserShow = (props) => {
    const user = props.getUser;
    return (
        <div>
            <h5 className="text-center">Your form data</h5>
            <div>First Name: {user.firstName}</div>
            <div>Last Name: {user.lastName}</div>
            <div>Email: {user.email}</div>
            <div>Password: {user.password}</div>
            <div>Confirm Password: {user.confirmPassword}</div>
        </div>
    )
}
export default UserShow;