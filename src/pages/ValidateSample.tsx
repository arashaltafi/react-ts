import { useState } from "react";

const ValidateSample = () => {
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [nationalCode, setNationalCode] = useState<string>('');

    const isValidNationalCode = (code: string) => {
        if (code.length !== 10 || /(\d)(\1){9}/.test(code)) {
            setIsValid(false);
        }

        let sum = 0;
        let chars = code.split('');
        let lastDigit;
        let remainder;

        for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

        remainder = sum % 11;
        lastDigit = remainder < 2 ? remainder : 11 - remainder;

        setIsValid(+chars[9] === lastDigit);
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>ValidateSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <input
                    className='w-1/3 px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg'
                    type="text"
                    placeholder='Enter Your NationalCode ...'
                    onChange={(e) => setNationalCode(e.target.value)}
                />
                <p className={`text-2xl font-bold text-center ${isValid === null ? 'text-black' : isValid ? 'text-green-500' : 'text-red-500'}`}>{isValid !== null && (isValid ? 'Valid' : 'Invalid')}</p>
                <button className='btnSuccess' onClick={() => isValidNationalCode(nationalCode)}>Check Validation NationalCode</button>
            </div>
        </div>
    )
}

export default ValidateSample