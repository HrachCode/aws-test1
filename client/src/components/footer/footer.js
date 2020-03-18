import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css'

export default function Footer (){
    const { t } = useTranslation();
    return(
        <footer className="container-fluid footerKarkas">
            <div>
                <p>{t("footer.1")} <a href="https://alcyonsystems.am/" target="_blank">Alcyon Systems LLC</a></p>
            </div>
        </footer>
    )
}