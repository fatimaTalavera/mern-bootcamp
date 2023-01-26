import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchForm from './searchForm'
import Result from './result'
import Error from './error'
import { useEffect } from 'react';

const SearchByType = (props) => {
    const { type, id } = useParams();
    const [getFilters, setFilters] = useState({ type, id });
    const [getResult, setResult] = useState({});

    const loadData = () => {
        axios.get(`https://swapi.dev/api/${getFilters.type}/${getFilters.id}`)
            .then(resp => setResult(resp.data))
            .catch(error => setResult({ error }))
    }

    useEffect(() => {
        if (type && id) loadData();
    }, [])

    return (
        <div className='container'>
			<SearchForm getFilters={getFilters} setFilters={setFilters} loadData={loadData}/>
            {!getResult.error ? <Result result={getResult}/> : <Error/>}
		</div>
    )
}
export default SearchByType;