import React, {useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/header';
import MinMenu from './components/minmenu/minmenu';
import Main from './components/main/main';
import Footer from './components/footer/footer';


export default function App () {
  const { i18n } = useTranslation();
  const [language, setLanguage]=useState("GB")


  const changeLanguages = (language)=>{
    setLanguage(language)
    i18n.changeLanguage(language)
  }
    return (
      <div>
        <Header lang={language} chanLang={changeLanguages}/>
        <Main />
        <Footer />
        <MinMenu lang={language} chanLang={changeLanguages} />
      </div>
    );
  
}

