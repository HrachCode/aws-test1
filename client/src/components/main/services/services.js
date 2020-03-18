import React  from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css'
import axios from 'axios'
export default function Services (){ 
    
    const { t} = useTranslation();
    const alerts = ()=>{
        console.log('ola');
        
        axios.get('https://swapi.co/api/people')
            .then(data=>{
                console.log(data);
                
            })
            .catch(err=>{
                console.log('err');
                
            })
    }
    return(
        <section>
            <div className="container-fluid servicesKarkas pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div  className="col-lg-6">
                            <img src={require("./images/02.png")} className="img-fluid"/>
                        </div>
                        <div className="col-lg-6 pl-4 pr-4 transWord">
                            <p>{t("mainSrev.1")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services"></div>
            <div className="mb-5 mt-5">
                <div className="container">
                    <div className="servicesTitle mb-4">
                        <p onClick={alerts}>{t("services.1")}</p>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 servicesPunct pl-4 pr-4">
                            <p className="translatLocal">{t("services.2")}</p>
                            <ul>
                                <li>{t("services.3")}</li>
                                <li>{t("services.4")}</li>
                                <li>{t("services.5")}</li>
                                <li>{t("services.6")}</li>
                                <li>{t("services.7")}</li>
                                <li>{t("services.8")}</li>
                            </ul>
                            <p>{t("services.9")}</p>
                        </div>
                        <div className="col-lg-5 transletIkon">
                            <img src={require("./images/03.png")} className="img-fluid"/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}