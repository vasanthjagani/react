// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      document.documentElement.lang = lng;
    });
  };

  return (
    <div className="language-switcher">
      {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button> */}
      <select name="language" onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
    </div>
  );
};

export default LanguageSwitcher;