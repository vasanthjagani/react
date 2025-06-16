import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  
  const { t } = useTranslation();
  console.log('Current language:', t);
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting')}</p>
    </div>
  );
}

export default MyComponent;