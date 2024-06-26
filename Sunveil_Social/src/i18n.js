

import { I18n } from 'i18n-js';
// Importa las traducciones (reemplaza con las rutas de tus archivos)
import es from './components/locales/es/onBoarding';
import en from './components/locales/en/onBoarding';

const i18n = new I18n({
    en,
    es,

});

i18n.enableFallback = true;

i18n.locale = 'en';

export default i18n;