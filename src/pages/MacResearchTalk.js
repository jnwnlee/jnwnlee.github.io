import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import ResearchTalkList from '../blocks/researchTalk/ResearchTalkList';

const MacResearchTalk = () => {
    document.body.classList.add( 'blog' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>MAC Research Talk | Junwon Lee</title>
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Placeholder page for MAC Research Talk." />
                <meta name="keywords" content="MAC Research Talk, audio research, Junwon Lee" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
            <Header/>

            <main id="main" className="site-main">
                <div className="wrapper spacer p-top-lg p-bottom-lg">
                    <h2>MAC Lab Research Talk</h2>
                    <p>
                        Building a community that shares technology, applications, and ideas in audio and music AI.
                    </p>

                    <h4>Overview</h4>
                    <p>
                        We welcome researchers, students, and enthusiasts to join our MAC Lab Research Talk series. 
                        This seminar platform is designed to facilitate the exchange of knowledge and foster collaboration in the field of audio and music AI. 
                        The topic coverage includes, but is not limited to:
                        <ul className="macResearchTalk-overview-list">
                            <li>Audio / Music AI technology</li>
                            <li>Sound Art: Creation and Production</li>
                            <li>Applications in Audio / Music tech (education, personalization, etc.)</li>
                            <li>Audio / Music Content and Curation</li>
                        </ul>
                        Committee: Junwon Lee, <a href="https://www.danbinaerin.com/">Danbinaerin Han</a>, <a href="https://seingreen.github.io/">Sein Lee</a>.
                    </p>
                    <br/>
                    <ResearchTalkList/>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default MacResearchTalk;
