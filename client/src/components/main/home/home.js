import React from 'react';
import './home.css';

export default function Home (){
    return (
        <section id="home" className='container-fluid'>
            <div className='container richjpg text-center'>
                <img src={require('./images/logo-01.png')} className="img-fluid"/>
            </div>
        </section>
    )
}