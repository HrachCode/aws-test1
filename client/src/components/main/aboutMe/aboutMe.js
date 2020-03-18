import React from 'react';
import { useTranslation } from 'react-i18next';
import './aboutMe.css'
import i18next from 'i18next';

export default function AboutMe (){
    
    const { t } = useTranslation();
    var ide="DE"
    if(i18next.language==="DE"){
        ide=""
    }

    return(
        <section id="aboutMe" className="servicesKarkas">
            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="servicesTitle mb-4">
                        <p>{t("aboutMe.1")}</p>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 imgME">
                            <img src={require("./images/Foto_02.png")} className="img-fluid"/>
                        </div>
                        <div className="col-lg-6 aboutMe">
                            <ul>
                                <li className="mb-3">{t("aboutMe.2")}</li>
                                <li className="mb-3">{t("aboutMe.3")}</li>
                                <li className="mb-3">{t("aboutMe.4")}</li>
                                <li className="mb-3">{t("aboutMe.5")}</li>
                                <li >
                                    {t("aboutMe.6")}
                                    <a href="#">{t("aboutMe.7")}</a>
                                    <span id={ide} className="hanel">{t("aboutMe.8")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}