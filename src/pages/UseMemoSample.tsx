import React, { useState, useMemo, useEffect } from 'react'

const UseMemoSample = () => {

    const [num, setNum] = useState<number>(0)
    const [theme, setTheme] = useState<boolean>(false)

    const addNumber = useMemo(() => {
        return slowFunction(num)
    }, [num]);

    useEffect(() => {
        console.log(theme);
    }, [theme])

    return (
        <>
            <div className='title'>useMemo</div>
            <div className={'flex flex-col items-center justify-center w-1/2 m-4 p-4' + (theme ? ' bg-red-400' : ' bg-blue-400')}>
                <h1>{addNumber}</h1>
                <input type="text" onChange={(e) => setNum(parseInt(e.target.value))} />
                <br /><hr />
                <button className='btnSuccess' onClick={() => { setTheme(!theme) }}> change theme </button>
            </div>
        </>
    )
}

const slowFunction = (nums: number) => {
    for (let i = 0; i < 1000000000; i++) { }
    return nums * 2;
}

export default UseMemoSample