import React, { useState, useMemo, useEffect } from 'react'
import { customLog } from '../utils/CustomConsole';

const UseMemoSample = () => {

    const [num, setNum] = useState<number>(0)
    const [theme, setTheme] = useState<boolean>(false)

    const addNumber = useMemo(() => {
        return slowFunction(num)
    }, [num]);

    useEffect(() => {
        customLog(theme);
    }, [theme])

    return (
        <>
            <div className='title'>useMemo</div>
            <div className={'w-full h-full flex flex-col items-center justify-center gap-16' + (theme ? ' bg-red-400' : ' bg-blue-400')}>
                <h1>{addNumber}</h1>
                <input className='p-4 m-2 text-lg bg-gray-200 rounded-lg text-center' type="number" onChange={(e) => setNum(parseInt(e.target.value))} />
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