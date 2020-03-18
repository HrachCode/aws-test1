import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css'

export default function Contact (){
    const { t } = useTranslation();
    return(
        <section id="contact">
            <div className="container pt-5 pb-5">
                <div className="servicesTitle mb-4">
                    <p>{t("contact.1")}</p>
                    <hr/>
                </div>
                <div className="row contactMe">
                    <div className="col-md-3">
                        <p className="prices">{t("contact.2")}</p>
                        <p className="mt-5">{t("contact.3")}</p>
                    </div>
                    <div className="col-md-3">
                        <img src={require("./images/email.png")} className="mb-2" />
                        <p className="mb-0 mt-5">{t("contact.4")}</p>
                        <a className='mailContact' href="mailto:info@richmond-translation.com">info@richmond-translation.com</a>
                    </div>
                    <div className="col-md-3">
                        <img src={require("./images/phone.png")} />
                        <p className="mb-0 mt-5">{t("contact.5")}</p>
                        <p className="phonNumber">+47 9396 9792</p>
                    </div>
                </div>
            </div>
        </section>
    )
}