import { useReducer } from 'react';
 
const initialState = {
    title: {
        value: '',
        error: null
    },
    description: {
        value: '',
        error: null
    },
    price: {
        value: '',
        error: null
    }
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

function serializeState(obj){
    let resutl = {};
    Object.keys(obj).map((key) => resutl[key] = obj[key].value);
    return resutl;
}

const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {handleSubmit, buttonTitle} = props;

    function onChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: {value}
        });
    }
 
    return (
        <form onSubmit={() => handleSubmit(serializeState(state))}>
            <div className="input-group mb-3">
                <span className="input-group-text">Title</span>
                <input type="text" className="form-control" placeholder="Title" name="title" onChange={ onChange } value={state.title.value}/>
                { state.title.error !== null && <div className="col-12 text-danger"> {state.title.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Price</span>
                <input type="number" className="form-control" placeholder="Price" name="price" onChange={ onChange } value={state.price.value}/>
                { state.price.error !== null && <div className="col-12 text-danger"> {state.price.error} </div>}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <input type="text" className="form-control" placeholder="Description" name="description" onChange={ onChange } value={state.description.value}/>
                { state.description.error !== null && <div className="col-12 text-danger"> {state.description.error} </div>}
            </div>
            <button type='submit' className='btn btn-success mt-3'>{buttonTitle}</button>
        </form>
    )
}
export default Form;