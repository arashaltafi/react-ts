import { useState } from 'react'
import transform from "../utils/CryptoJs";
import Divider from './Divider';

const CryptoSample = () => {

    const [input1, setInput1] = useState('')
    const [encrypt1, setEncrypt1] = useState('')
    const [decrypt1, setDecrypt1] = useState('')

    const [input2, setInput2] = useState('')
    const [encrypt2, setEncrypt2] = useState('')
    const [decrypt2, setDecrypt2] = useState('')

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>CryptoSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8 pb-8'>
                <input
                    className='w-3/4 p-4 m-2 text-lg bg-gray-200 rounded-lg'
                    type="text"
                    value={input1}
                    onChange={(event) => setInput1(event.target.value)}
                />
                <p className='subtitle'>Encrypt1 : {encrypt1}</p>
                <p className='subtitle'>Decrypt1 : {decrypt1}</p>
                <button onClick={() => setEncrypt1(transform.hashThis(input1, true))} className='btnSuccess'>Encrypt Sample 1</button>
                <button onClick={() => setDecrypt1(transform.hashThis(input1, false))} className='btnError'>Decrypt Sample 1</button>

                <Divider />

                <input
                    className='w-3/4 p-4 m-2 text-lg bg-gray-200 rounded-lg'
                    type="text"
                    value={input2}
                    onChange={(event) => setInput2(event.target.value)}
                />
                <p className='subtitle'>Encrypt2 : {encrypt2}</p>
                <p className='subtitle'>Decrypt2 : {decrypt2}</p>
                <button onClick={() => setEncrypt2(transform.hashThis2(input2, true))} className='btnSuccess'>Encrypt Sample 2</button>
                <button onClick={() => setDecrypt2(transform.hashThis2(input2, false))} className='btnError'>Decrypt Sample 2</button>
            </div>
        </div>
    )
}

export default CryptoSample