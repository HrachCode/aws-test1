import React from 'react';
import { useTranslation } from 'react-i18next';
import './imprint.css';

export default function Imprint (){
    const { t } = useTranslation();
    return(
        <section id="imprint" className='container-fluid imprintKarkas pt-5 pb-5'>
            <div className='container'>
                <div className="servicesTitle mb-5">
                    <p>{t("imprint.1")}</p>
                    <hr/>
                </div>
                <div className="row d-flex justify-content-center imprintKar">
                    <div className="col-6 text-center imgMat">
                        <img src={require('./images/Imprint.png')} />
                    </div>
                    <div className='col-6 infMat'>
                        <div className='infoJenni'>
                            <div className='mr-5 imprintInf'>
                                <p>Jennifer Richmond</p>
                                <p>{t("imprint.2")}</p>
                                <p>{t("imprint.3")}</p>
                                <p>{t("imprint.4")}</p>
                            </div>
                            <div className='imprintNum'>
                                <p className='nin'>i</p>
                                <p className='nin'>i</p>
                                <p>
                                    <img src={require("./images/phone.png")} /> +47 9396 9792
                                </p>
                                <p>
                                    <img src={require("./images/email.png")} />
                                    <a href='mailto:info@richmond-translation.com'> info@richmond-translation.com</a>
                                </p>
                            </div>
                        </div>
                        <p className='mt-4 vatID'>{t("imprint.5")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}