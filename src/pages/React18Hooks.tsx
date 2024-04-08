import { useMemo, useState, useCallback, useTransition, useEffect } from 'react';

// use memo is memorize the result of a function in constant
// use callback is to create once the function to use it

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

    const [counter , setCounter] = useState<number>(0);
    useEffect(() => {
        console.log('useEffect called!');
    }, [counter])

    const memo = useMemo(() => {
        console.log('useMemo called!');
        return counter * 2
    }, [counter])

    console.log('memo:', memo)


    const [count, setCount] = useState(0);

    // ! useMemo is useful for calculations that don't change with the state
    // ! useEffect is useful for calculations that change with the state
    // ! useCallback is useful for functions that don't change with the state
    // ! useMemo and useEffect are useful for functions that change with the state
    // ! useMemo and useCallback are useful for functions that don't change with the state
    // ! useMemo is change only when the dependency array changes
    // ! useEffect is change only when the dependency array changes
    const doubleCount = useMemo(() => {
        console.log('Calculating double...');
        return count * 2;
    }, [count]); // Dependency array, so it recalculates when count changes

    useEffect(() => {
        console.log('count changed...');
    }, [count])

    return (
        <div className='flex flex-col items-center justify-center gap-12 w-full px-8 py-6'>
            <>
                <button
                    onClick={fetchData}
                    className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300'
                >
                    Fetch Data
                </button>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p className='text-lg'>Data Length: {memoizedDataLength}</p>
                        <button
                            onClick={handleButtonClick}
                            className='mt-8 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300'
                        >
                            Click Me
                        </button>
                    </div>
                )}
            </>

            <>
                <p className='text-lg mt-32'>Count: {count}</p>
                <p className='text-lg'>Double Count (Memoized): {doubleCount}</p>
                <button
                    onClick={() => setCount(count + 1)}
                    className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300'
                >
                    Increment Count
                </button>
            </>

            <button
                    onClick={() => setCounter(counter => counter + 1)}
                    className='mt-16 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300'
                >
                    set Name
                </button>
        </div>
    );
};

export default React18Hooks;
