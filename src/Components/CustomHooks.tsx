import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Divider from './Divider'
import { useBoolean } from 'usehooks-ts'
import { useClickAnyWhere } from 'usehooks-ts'
import { useCopyToClipboard } from 'usehooks-ts'
import { useDarkMode } from 'usehooks-ts'
import { useDebounce } from 'usehooks-ts'
import { useDocumentTitle } from 'usehooks-ts'
import { useEffectOnce } from 'usehooks-ts'
import { useHover } from 'usehooks-ts'
import { useIsFirstRender } from 'usehooks-ts'
import { useScreen } from 'usehooks-ts'
import { useWindowSize } from 'usehooks-ts'
import { customLog } from '../utils/CustomConsole'

const CustomHooks = () => {
    //useBoolean
    const { value, setTrue, setFalse, toggle } = useBoolean(false)

    //useClickAnyWhere
    const [count, setCount] = useState(0)
    useClickAnyWhere(() => {
        setCount(prev => prev + 1)
    })

    //useCopyToClipboard
    const [valueCopy, copy] = useCopyToClipboard()

    //useDarkMode
    const { isDarkMode, enable, disable } = useDarkMode()

    //useDebounce
    const [valueDebounce, setValueDebounce] = useState<string>('')
    const debouncedValue = useDebounce<string>(valueDebounce, 500)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueDebounce(event.target.value)
    }
    useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
        customLog('debouncedValue', debouncedValue);
    }, [debouncedValue])

    //useDocumentTitle
    const [valueTitle, setValueTitle] = useState<string>('Custom Hooks')
    useDocumentTitle(valueTitle)

    //useEffectOnce
    const [data, setData] = useState<number>(0)
    useEffect(() => {
        customLog('Normal useEffect', { data })
    }, [data])
    useEffectOnce(() => {
        customLog('Triggered only once, on mount', { data })
    })

    //useHover
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    //useIsFirstRender
    const isFirst = useIsFirstRender()
    const [dataFirstRender, setDataFirstRender] = useState<number>(0)
    useEffect(() => {
        customLog('Normal useEffect', dataFirstRender)
    }, [dataFirstRender])

    //useScreen
    const screen = useScreen()
    const { width, height } = useWindowSize()


    return (
        <>
            <div className='title py-12 no-underline'>CustomHooks</div>

            <div className='flex flex-col gap-8 items-center justify-center text-center pb-16'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-xl'>
                        Value is <code>{value.toString()}</code>
                    </p>
                    <div className='flex flex-row gap-4'>
                        <button className='btnSuccess bg-green-500' onClick={setTrue}>set true</button>
                        <button className='btnSuccess bg-red-500' onClick={setFalse}>set false</button>
                        <button className='btnSuccess bg-purple-500' onClick={toggle}>toggle</button>
                    </div>
                </div>

                <Divider />

                <p className='text-xl'>Click count: {count}</p>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='text-xl'>Click to copy:</h1>
                    <div className='flex flex-row gap-4'>
                        <button className='btnSuccess bg-red-500' onClick={() => copy('Arash')}>Arash</button>
                        <button className='btnSuccess bg-sky-500' onClick={() => copy('Alex')}>Alex</button>
                        <button className='btnSuccess bg-zinc-500' onClick={() => copy('Jenifer')}>Jenifer</button>
                    </div>
                    <p>Copied value: {valueCopy ?? 'Nothing is copied yet!'}</p>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-xl'>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
                    <div className='flex flex-row gap-4'>
                        <button className='btnSuccess bg-green-500' onClick={enable}>Enable</button>
                        <button className='btnSuccess bg-red-500' onClick={disable}>Disable</button>
                    </div>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-xl'>Value real-time: {valueDebounce}</p>
                    <p className='text-xl'>Debounced value: {debouncedValue}</p>

                    <input className='p-2 m-2 text-lg bg-gray-100 rounded-lg' type="text" value={valueDebounce} onChange={handleChange} />
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <input className='p-2 m-2 text-lg bg-gray-100 rounded-lg' type="text" value={valueTitle} onChange={(e) => setValueTitle(e.target.value.toString())} />
                    <button className='btnSuccess bg-red-500' disabled>Type To Title Changing ...</button>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-xl'>Open your console</p>
                    <button className='btnSuccess bg-red-500' onClick={() => setData(Date.now())}>Update data</button>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div ref={hoverRef}
                        className={`text-white px-8 py-4 rounded-lg shadow-xl text-2xl ${isHover ? 'bg-green-500' : 'bg-red-500'}`}>
                        {`The current div is ${isHover ? `hovered` : `unhovered`}`}
                    </div>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <p className='text-xl'>Open your console</p>
                    <p className='text-xl'>Is first render: {isFirst ? 'yes' : 'no'}</p>
                    <button className='btnSuccess bg-sky-500' onClick={() => setDataFirstRender(Date.now())}>Update data</button>
                </div>

                <Divider />

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='text-xl'>
                        The current window dimensions are:
                        <code className='text-xl'>
                            {JSON.stringify({ width: screen?.width, height: screen?.height })}
                        </code>
                    </div>
                    <div className='text-xl'>
                        The current window dimensions are:
                        <code className='text-xl'>
                            {JSON.stringify({ width, height })}
                        </code>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CustomHooks