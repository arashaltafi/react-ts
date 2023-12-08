import useFetch from '../hooks/useFetch'

const FetchApiWithHook = () => {

    const apiUrl = 'https://catfact.ninja/fact';
    const apiUrl2 = 'https://api.chucknorris.io/jokes/random';
    const { data, isLoading, errorMessage, reFetch } = useFetch(apiUrl2);

    return (
        <>
            <h1 className='title'>FetchApiWithHook</h1>
            {isLoading && <p className='subtitle'>Loading...</p>}
            {errorMessage && <p className='subtitle'>errorMessage: {errorMessage}</p>}
            {data?.value && <p className='subtitle'>Data: {data?.value}</p>}
            <button className='btnSuccess' onClick={reFetch}>ReFetch</button>
        </>
    )
}

export default FetchApiWithHook