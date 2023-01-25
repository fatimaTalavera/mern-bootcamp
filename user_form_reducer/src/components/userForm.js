import { useReducer } from 'react';
 
const initialState = {
    firstName: {
        value: '',
        error: null,
        minlength: 2
    },
    lastName: {
        value: '',
        error: null,
        minlength: 2
    },
    email: {
        value: '',
        error: null,
        minlength: 5
    },
    password: {
        value: '',
        error: null,
        minlength: 8
    },
    confirmPassword: {
        value: '',
        error: null,
        minlength: 8
    }
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function onChange(e) {
        const { name, value, placeholder } = e.target;
        console.log(e.target)
        let error = value !== '' && value.length < initialState[name].minlength ? `${placeholder} must have at least ${initialState[name].minlength } characters.` : null;
        if (name === 'confirmPassword' &&  value !== e.target.closest('form').querySelector('input[name="password"]').value)
            error = "Passwords must match."

        dispatch({
            type: name,
            payload: {value, error}
        });
    }

    return (
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text">First Name</span>
                <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={ onChange } value={state.firstName.value}/>
                { state.firstName.error !== null && <div className="col-12 text-danger"> {state.firstName.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last Name</span>
                <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={ onChange } value={state.lastName.value}/>
                { state.lastName.error !== null && <div className="col-12 text-danger"> {state.lastName.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="email" className="form-control" placeholder="Email" name="email" onChange={ onChange } value={state.email.value}/>
                { state.email.error !== null && <div className="col-12 text-danger"> {state.email.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={ onChange } value={state.password.value}/>
                { state.password.error !== null && <div className="col-12 text-danger"> {state.password.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Confirm Password</span>
                <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={ onChange } value={state.confirmPassword.value} />
                { state.confirmPassword.error !== null && <div className="col-12 text-danger"> {state.confirmPassword.error} </div>}
            </div>
        </form>
    )
}
export default UserForm;