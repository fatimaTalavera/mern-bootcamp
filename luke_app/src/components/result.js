const Result = ({result}) => {
    return (
        <>
            <h2>{result.name || result.title}</h2>
            {Object.keys(result).map(item => { if(typeof result[item] === 'string') return (<div key={item}><span>{item}: </span><b>{result[item]}</b></div>) })}
        </>
    )
}
export default Result;