import { useState } from "react";
import Divider from "../Components/Divider";

const ValidateSample = () => {
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [nationalCode, setNationalCode] = useState<string>('');

    const [isValidPhone, setIsValidPhone] = useState<boolean | null>(null);
    const [phone, setPhone] = useState<string>('');

    const [isValidCartBank, setIsValidCartBank] = useState<boolean | null>(null);
    const [cartBank, setCartBank] = useState<string>('');

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

    const isValidPhoneNumber = (phone: string) => {
        const iranianPhoneRegex = /^09\d{9}$/;
        setIsValidPhone(iranianPhoneRegex.test(phone));
    }

    const isValidCartBankNumber = (card: string) => {
        if (
            typeof card === 'undefined' ||
            card === undefined ||
            card === null ||
            isNaN(Number(card)) ||
            card.length !== 16
        ) {
            setIsValidCartBank(false);
        } else {
            let cardTotal = 0;

            for (let i = 0; i < 16; i += 1) {
                const c = Number(card[i]);
                if (i % 2 === 0) {
                    cardTotal += c * 2 > 9 ? c * 2 - 9 : c * 2;
                } else {
                    cardTotal += c;
                }
            }

            setIsValidCartBank(cardTotal % 10 === 0);
        }
    }

    return (
        <div className="w-full py-8 flex flex-col gap-16">
            <h1 className='title text-red-500'>ValidateSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-12 mt-16'>
                <div className="w-full h-full flex items-center justify-center flex-col gap-6">
                    <h3 className='subtitle'>Validate NationalCode</h3>
                    <input
                        className='w-1/3 px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg'
                        type="text"
                        placeholder='Enter Your NationalCode ...'
                        onChange={(e) => setNationalCode(e.target.value)}
                    />
                    <p className={`text-2xl font-bold text-center ${isValid === null ? 'text-black' : isValid ? 'text-green-500' : 'text-red-500'}`}>{isValid !== null && (isValid ? 'Valid' : 'Invalid')}</p>
                    <button className='btnSuccess' onClick={() => isValidNationalCode(nationalCode)}>Check Validation NationalCode</button>
                </div>

                <Divider />

                <div className="w-full h-full flex items-center justify-center flex-col gap-6">
                    <h3 className='subtitle'>Validate Phone</h3>
                    <input
                        className='w-1/3 px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg'
                        type="text"
                        placeholder='Enter Your Phone ...'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className={`text-2xl font-bold text-center ${isValidPhone === null ? 'text-black' : isValidPhone ? 'text-green-500' : 'text-red-500'}`}>{isValidPhone !== null && (isValidPhone ? 'Valid' : 'Invalid')}</p>
                    <button className='btnSuccess' onClick={() => isValidPhoneNumber(phone)}>Check Validation Phone</button>
                </div>

                <Divider />

                <div className="w-full h-full flex items-center justify-center flex-col gap-6">
                    <h3 className='subtitle'>Validate Cart Bank</h3>
                    <input
                        className='w-1/3 px-4 py-3 border-2 border-solid border-black m-4 rounded-xl shadow-lg'
                        type="text"
                        placeholder='Enter Your Phone ...'
                        onChange={(e) => setCartBank(e.target.value)}
                    />
                    <p className={`text-2xl font-bold text-center ${isValidCartBank === null ? 'text-black' : isValidCartBank ? 'text-green-500' : 'text-red-500'}`}>{isValidCartBank !== null && (isValidCartBank ? 'Valid' : 'Invalid')}</p>
                    <button className='btnSuccess' onClick={() => isValidCartBankNumber(cartBank)}>Check Validation Cart Bank</button>
                </div>
            </div>
        </div>
    )
}

export default ValidateSample