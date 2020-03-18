import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';


export default function Header (props){

    const [addId, setAddId] = useState("");
    const { t, i18n  } = useTranslation();
    var prevScrollpos=window.scrollY

    const onSelectFlag=(countryCode)=>{
        props.chanLang(countryCode)
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll, true);

      })
      
    function handleScroll (){
        var currentScrollPos = window.scrollY;
        if(prevScrollpos>currentScrollPos){
        setAddId(0);
        
        }else if(prevScrollpos<currentScrollPos && window.innerWidth<1000){
            setAddId(-120);     
        }
        
        
        prevScrollpos=currentScrollPos
    };
        console.log(t("headerMenu.1"))
    return(
        <header id="navbar" className="container-fluid pl-5 pr-5 headerKarkas" style={{"top":addId}}>
            <div className="row">
                <div className="col-1 d-flex align-items-center logoImage">
                    <img src={require("./images/logo.png")} width="70"/>
                </div>
                <div className="col-10 d-flex justify-content-center align-items-center menuTop">
                    <Nav variant="pills" className="Poxatc ">
                        <Nav.Item className="bord">
                            <Nav.Link className="harc pl-4 pr-4"  eventKey="Home" href="#home"><div className="image"></div></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="bord">
                            <Nav.Link className="harc words pl-4 pr-4" eventKey="Services" href="#services">{t("headerMenu.1")}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="bord">
                            <Nav.Link className="harc words pl-4 pr-4" eventKey="About US"  href="#aboutMe">{t("headerMenu.2")}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="bord">
                            <Nav.Link className="harc words pl-4 pr-4" eventKey="Contact" href="#contact">{t("headerMenu.3")}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="bord">
                            <Nav.Link className="harc words pl-4 pr-4" eventKey="Imprint" href="#imprint">{t("headerMenu.4")}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-1 d-flex justify-content-end flagTop">
                    <ReactFlagsSelect
                        countries={["DE", "GB"]} //, "NO","DK","SE"
                        defaultCountry={i18n.language}
                        showSelectedLabel={false}
                        showOptionLabel={false}
                        selectedSize={22}
                        optionsSize={14}
                        onSelect={onSelectFlag}
                        />
                </div>
            </div>
        </header>
    )
}
