import React, { useState,  useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import SimpleModal from "./SimpleModal/SimpleModal";
import 'react-flags-select/css/react-flags-select.css';
import './minmenu.css'

export default function MinMenu (props) {
    const [addId, setAddId] = useState()
    const [minMenu, setMinMenu]=useState("")
    const { t, i18n } = useTranslation();
    var prevScrollPos = window.scrollY;

    const onSelectFlag=(countryCode)=>{
        props.chanLang(countryCode)
    }

    const handleToggleModal=()=> {
      setMinMenu(!minMenu);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, true);
    })

    function handleScroll(){
        var currentScrollPos = window.scrollY;
        if(prevScrollPos>currentScrollPos){
            setAddId(30);
        }else{
            setAddId(-120);
        }
        prevScrollPos=currentScrollPos;
    }

    return(
        <div  className="minMenu">
            <img className="minMenuKotchak" src={require("./menu.png")} onClick={handleToggleModal} style={{"top":addId}}/>
            {minMenu && (
                <SimpleModal onCloseRequest={handleToggleModal}>
                    <div>
                        <div className="minMenuPages">
                            <a href="#home" onClick={handleToggleModal}><div className="image marginImeg"></div></a>
                        </div>
                        <div className="minMenuPages">
                            <a href="#services" onClick={handleToggleModal}>{t("headerMenu.1")}</a>
                        </div>
                        <div className="minMenuPages">
                            <a href="#aboutMe" onClick={handleToggleModal}>{t("headerMenu.2")}</a>
                        </div>
                        <div className="minMenuPages">
                            <a href="#contact" onClick={handleToggleModal}>{t("headerMenu.3")}</a>
                        </div>
                        <div className="minMenuPages">
                            <a href="#imprint" onClick={handleToggleModal}>{t("headerMenu.4")}</a>
                        </div>
                        <div className="minMenuPages">
                            <ReactFlagsSelect
                                countries={["DE", "GB"]} //, "NO","DK","SE"
                                defaultCountry={i18n.language}
                                showSelectedLabel={false}
                                showOptionLabel={false}
                                selectedSize={30}
                                optionsSize={22}
                                onSelect={onSelectFlag}
                                />
                        </div>
                    </div>
                </SimpleModal>
            )}
        </div>
    )
}
