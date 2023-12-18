import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaSample = () => {

    const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)

    const verifyReCaptcha = () => {
        setIsRecaptchaVerified(true);
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='title py-12 no-underline'>ReCaptcha</div>

            <div className='flex flex-col gap-8 items-center justify-center text-center mt-16'>
                <p className='subtitle mt-8'>ReCaptcha Verify: {isRecaptchaVerified.toString()}</p>

                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={verifyReCaptcha}
                />
            </div>

        </div >
    )
}

export default ReCaptchaSample