import { useState } from "react";
import useStore from "../zustand/store";
import { customLog } from "../utils/CustomConsole";

const ZustandSample = () => {

    const [inputName, setInputName] = useState<string>("");
    const [inputFamily, setInputFamily] = useState<string>("");
    const [inputPhone, setInputPhone] = useState<string>("");
    const [inputAge, setInputAge] = useState<number>(0);

    const { setName, setFamily, setPhone, setAge } = useStore();
    const { name, family, phone, age } = useStore();

    const handleSubmit = () => {
        setName(inputName);
        setFamily(inputFamily);
        setPhone(inputPhone);
        setAge(inputAge);
        customLog("inputName", inputName);
        customLog("inputFamily", inputFamily);
        customLog("inputPhone", inputPhone);
        customLog("inputAge", inputAge);
    };

    return (
        <>
            <div className='title mt-8'>ZustandSample</div>
            <div className="flex flex-col gap-8 w-1/3 mx-auto mt-32">
                <input className='px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg' type="text" onChange={(e) => setInputName(e.target.value)} placeholder='Set Your Name ...' />
                <input className='px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg' type="text" onChange={(e) => setInputFamily(e.target.value)} placeholder='Set Your Family ...' />
                <input className='px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg' type="number" onChange={(e) => setInputPhone(e.target.value)} placeholder='Set Your Phone ...' />
                <input className='px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg' type="number" onChange={(e) => setInputAge(parseInt(e.target.value))} placeholder='Set Your Age ...' />
            </div>
            <div className='flex flex-col gap-8 items-center justify-center w-full mt-32'>
                <button className='btnSuccess font-bold text-xl' onClick={handleSubmit}>Submit</button>
            </div>
            <hr className="mt-16" />
            <div className="mt-16 pb-16 flex flex-col gap-8 mx-auto text-center">
                <p className="text-xl font-bold">name :  {name}</p>
                <p className="text-xl font-bold">family :  {family}</p>
                <p className="text-xl font-bold">phone :  {phone}</p>
                <p className="text-xl font-bold">age :  {age}</p>
            </div>
        </>
    )
}

export default ZustandSample