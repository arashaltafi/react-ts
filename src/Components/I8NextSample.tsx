import React, { useEffect, useState } from 'react'
import '../localiztion/i18nextSetting';
import { useTranslation } from 'react-i18next';

const I8NextSample = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
    setLanguage(localStorage.getItem('language') || 'en');
  }, []);


  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('language', lang)
    console.log('handleChangeLang: ', lang);
  }

  useEffect(() => {
    console.log('Language: ', i18n.changeLanguage());
  }, [language]);


  return (
    <>
      <p className='title bg-zinc-800 text-white py-4 mt-16 rounded-xl shadow-lg w-1/2'>
        {t('language-management')}
      </p>
      <div className='mt-16 flex flex-col gap-8'>
        <p className='subtitle'>
          {t('hi')}
        </p>
        <hr />
        <p className='subtitle'>
          {t('how-are-you')}
        </p>
        <hr />
        <p className='subtitle'>
          {t('good')}
        </p>
        <hr />
        <p className='subtitle'>
          {t('bad')}
        </p>
        <hr />
        <p className='subtitle'>
          {t('bye')}
        </p>

        <button
          className='btnSuccess w-1/3 m-auto bg-green-600 mt-8 py-4 px-6 text-2xl rounded-xl shadow-xl active:scale-105 hover:bg-green-400'
          onClick={() => handleChangeLang(language === 'en' ? 'fa' : 'en')}>
          {t('change-language')}
        </button>
      </div >
    </>
  )
}

export default I8NextSample