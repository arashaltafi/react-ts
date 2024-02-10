import { useState } from 'react'
import OtpInput from 'react-otp-input';
import Swal from 'sweetalert2';

//npm install react-otp-input
const OtpInputSample = () => {
    const [otp, setOtp] = useState<string>('');
    const [autoFocused, setAutoFocused] = useState<boolean>(true);

    const handleClickGetCode = () => {
        if (otp.length === 4) {
            Swal.fire({
                title: "Opt Code",
                text: `your otp code: ${otp}`,
                icon: "success"
            });
            setOtp('')
            setAutoFocused(true)
        }
    }

    const handleClickClearCode = () => {
        setOtp('')
        setAutoFocused(true)
    }

    return (
        <div className='w-full flex flex-col gap-16 items-center justify-start py-16'>
            <h1 className='title no-underline'>OtpInput Sample</h1>

            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={
                    <span className='w-20 h-2 bg-slate-800 rounded-full dark:bg-slate-200 mx-2' />
                }
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={autoFocused}
                skipDefaultStyles={false}
                placeholder='1234'
                inputStyle={{
                    width: '80%',
                    backgroundColor: '#64748B',
                    color: 'white',
                    padding: '50px 0px',
                    fontSize: 64,
                    fontFamily: 'vazir',
                    borderRadius: 24,
                }}
                containerStyle={{
                    width: '80%'
                }}
            />

            <div className='flex flex-row gap-8 items-center justify-center mt-16'>
                <button
                    className='btnError'
                    onClick={handleClickClearCode}
                >
                    Clear Otp Code
                </button>

                <button
                    className='btnSuccess'
                    onClick={handleClickGetCode}
                >
                    Get Otp Code
                </button>
            </div>

        </div>
    )
}

export default OtpInputSample