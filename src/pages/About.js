import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import Prof from '../blocks/peopleCard/Prof'
import ProfData from '../data/people/prof.json'

import Hnr from '../blocks/honor/Hnr';
import HnrInfoData from '../data/honors/hnrInfo.json';

import Edu from "../blocks/education/Edu"
import EduInfoData from '../data/education/eduInfo.json';

import Ind from "../blocks/industry/Ind"
import IndInfoData from '../data/industry/indInfo.json';

const About = () => {
    document.body.classList.add( 'about' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Junwon Lee</title>
                {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>"></link> */}
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
            <Header/>

            <main id="main" className="site-main">
                <Prof ProfData={ProfData}/>
                <Ind IndInfoData = {IndInfoData}/>
                <Edu EduInfoData = {EduInfoData}/>
                <Hnr HnrInfoData = {HnrInfoData}/>
                <div className="wrapper">
                    
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default About;
