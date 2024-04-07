import { useMemo, useState, useCallback, useTransition, useEffect } from 'react';

const React18Hooks = () => {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, startTransition] = useTransition();

    // Example of useMemo: Memoizing an expensive computation
    const memoizedDataLength = useMemo(() => {
        console.log('Calculating data length...');
        return data.length;
    }, [data]);

    // ! useCallback just create once the function in first of component rendered
    // ! if don't use useCallback it will created every time the component rendered
    const handleButtonClick = useCallback(() => {
        console.log('Button clicked!');
    }, []);

    // ! useTransition is useful for loading state
    const fetchData = async () => {
        startTransition(() => {
            console.log('Fetching data...');
            setTimeout(() => {
                setData(['Data 1', 'Data 2', 'Data 3']);
            }, 3000);
        });
    };


    const [count, setCount] = useState(0);

    // ! useMemo is useful for calculations that don't change with the state
    const doubleCount = useMemo(() => {
        console.log('Calculating double...');
        return count * 2;
    }, [count]); // Dependency array, so it recalculates when count changes

    useEffect(() => {
        console.log('count changed...');
    }, [count])

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Data Length: {memoizedDataLength}</p>
                    <button onClick={handleButtonClick}>Click Me</button>
                </div>
            )}


            <div className='mt-16'>
                <p>Count: {count}</p>
                <p>Double Count (Memoized): {doubleCount}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </div>
    );
};

export default React18Hooks;
