import { useEffect, useState } from 'react';
import strings from '../localiztion/localizations'

const LocaleLanguage = () => {
    const [language, setLanguage] = useState('en');

    const handleChangeLang = (lang: string) => {
        strings.setLanguage(lang);
        setLanguage(lang);
    }

    useEffect(() => {
        console.log('Language: ', strings.getLanguage());
    }, [language]);

    return (
        <>
            <p className='title bg-zinc-800 text-white py-4 mt-16 rounded-xl shadow-lg w-1/2'>
                {strings['language-management']}
            </p>
            <div className='mt-16 flex flex-col gap-8'>
                <p className='subtitle'>
                    {strings.hi}
                </p>
                <hr />
                <p className='subtitle'>
                    {strings['how-are-you']}
                </p>
                <hr />
                <p className='subtitle'>
                    {strings.good}
                </p>
                <hr />
                <p className='subtitle'>
                    {strings.bad}
                </p>
                <hr />
                <p className='subtitle'>
                    {strings.bye}
                </p>

                <button
                    className='btnSuccess w-1/3 m-auto bg-green-600 mt-8 py-4 px-6 text-2xl rounded-xl shadow-xl active:scale-105 hover:bg-green-400'
                    onClick={() => handleChangeLang(language === 'en' ? 'fa' : 'en')}>
                    {strings['change-language']}
                </button>
            </div >
        </>
    )
}

export default LocaleLanguage