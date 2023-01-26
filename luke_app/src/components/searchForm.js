const TYPES = [
    'films',
    'people',
    'planets',    
    'species',
    'starships',
    'vehicles'
]

const SearchForm = (props) => {
    const { getFilters, setFilters, loadData } = props;

    const onChange = (e) => {
        setFilters({
            ...getFilters,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        loadData();
    }

    return (
        <form className="d-flex justify-content-between align-items-center my-5" onSubmit={onSubmit}>
			<div className="input-group me-3">
                <label className="input-group-text">Search for:</label>
                <select className="form-select" name="type" defaultValue={getFilters.type? getFilters.type : 0} onChange={onChange} required>
                    <option value='0' disabled>Choose...</option>
                    { TYPES?.map( type => {return (<option value={type} key={type}>{type}</option>)}) }
                </select>
            </div>
            <div className="input-group me-3">
                <span className="input-group-text">Id</span>
                <input type="number" className="form-control" placeholder="Username" value={getFilters.id}  name="id" onChange={onChange} required/>
            </div>
            <button type='submit' className='btn btn-dark'>Search</button>
		</form>
    )
}
export default SearchForm;