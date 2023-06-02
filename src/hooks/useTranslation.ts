import React from 'react';
import translation from '../app/locales'

function useTranslation() {
  const { language } = React.useContext(LanguageContext);
  const translation = translations[language];

  function t(key) {
    return translation[key] || key;
  }

  return { t };
}

export default useTranslation;
```
