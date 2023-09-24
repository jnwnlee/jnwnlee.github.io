import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import ReactMarkdown from 'react-markdown'
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

// import file from '../assets/blog/speech_to_music/contents.md';

const Contents = () => {
    // const [markdown, setMarkdown] = useState("");

    // useEffect(() => {
    //     fetch(file)
    //     .then((res) => res.text())
    //     .then((text) => setMarkdown(text));
    // }, []);

    document.body.classList.add( 'blog' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>SeungHeon Doh | MIR, ML/DL Researcher</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>"></link>
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
                <div className="wrapper">
                    <h3>Speech to Music through Emotion</h3>
                        <pre><code>Speech to Music through Emotion, Interspeech 2022 
                        - SeungHeon Doh, Minz Won, Keunwoo Choi, Juhan Nam
                        </code></pre>
                <p>This project maps <strong>speech</strong> and <strong>music</strong> to the same embedding space and supports music item search for speech query by calculating the similarity between them.
                The detail of the methodology for building the dataset please refer to our paper.</p>
                <ul>
                    <li>Paper on Arxiv</li>
                    <li>Pre-trained model on Zenodo</li>
                    <li>Implementation Code</li>
                </ul>
                <h4>Abstract</h4>
                    <p>Automatic speech emotion recognition (SER) can be used as a music recommendation application for content creators.
                    In this paper, our goal is to assist content creators in finding music that matches the emotion of their speech.
                    We focus on a cross-modal speech-to-music retrieval framework to simultaneously perform feature extraction and bridge the modality gap using emotion labels. Moreover, we propose a novel masking fusion method, which obtains the ensemble effect by stochastic modality feature selection.
                    Our experiments show that we can successfully bridge the gap between modalities to facilitate cross-modal retrieval.
                    In addition, comprehensive experimental results compared with four retrieval methods on five speech modality representations verify the effectiveness of our masking fusion method.
                    </p>
                <img className="blog_contents" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/main.png`} alt="speech_to_music"/>
                <h4>In the wild demo</h4>
                    <p>
                    To demonstrate real industrial scenarios, we use samples from social media contents (tiktok #actingscene tag) and audio books contents (youtube). 
                    It also searches for music using only the audio modality because it assumes no transcription. It also makes use of the <a href='https://www.jyu.fi/hytk/fi/laitokset/mutku/en/research/projects2/past-projects/coe/materials/emotion/soundtracks/Index'>soundtrack360 dataset</a> as a high-quality audio database.
                    </p>
                <iframe className="blog_contents" width="560" height="600" src="https://www.youtube.com/embed/K2Aent-pRnM" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

                
                <h4>Test-set demo</h4>
                    <p> We report the results for IEMOCAP and Audioset, which are test datsets reported in the paper. The samples below were extracted based on the <a href='https://github.com/SeungHeonDoh/speech_to_music/blob/master/notebook/demo.ipynb'>code</a>.</p>
                    <table>
                        <tr>
                            <th>  </th>
                            <th> Speech Query </th>
                            <th> Similar Music 1 </th>
                            <th> Similar Music 2 </th>
                            <th> Similar Music 3 </th>
                        </tr>
                        <tr> 
                            <th> angry </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/angry/angry.wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/angry/angry (1).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/angry/angry (2).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/angry/angry (3).wav`} type="audio/mpeg"/> </th>
                        </tr>
                        <tr> 
                            <th> happy </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/happy/happy.wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/happy/happy (1).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/happy/happy (2).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/happy/happy (3).wav`} type="audio/mpeg"/> </th>
                        </tr>
                        <tr> 
                            <th> sad </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/sad/sad.wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/sad/sad (1).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/sad/sad (2).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/sad/sad (3).wav`} type="audio/mpeg"/> </th>
                        </tr>
                        <tr> 
                            <th> neutral </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/neutral/neutral.wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/neutral/neutral (1).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/neutral/neutral (2).wav`} type="audio/mpeg"/> </th>
                            <th> <audio controls id="player" onplay="pauseOthers(this);" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/neutral/neutral (3).wav`} type="audio/mpeg"/> </th>
                        </tr>
                    </table>

                <h4>Visualization</h4>
                <p>
                First of all, for both the VA embedding space and the metric learning space, emotion labels that share a similar semantic are neighboring together in the embedding. 
                In contrast to VA regression, metric learning discriminates between emotions and noise-neutral. 
                Comparing uni-modal speech representation (Figure-(c),(d),(e),(f)), audio modality shows strong cohesion for each emotion label and has low error variance. 
                Even for incorrect samples, this will lead to high errors. The text modality, on the other hand, has high error variance. It makes that angry and neutral embeddings are mixed up. The late fusion + masking approach (Figure-(g),(h)) shows a more generalized embedding distribution by alleviating the high error problem and mix-up problem between angry and neutral.
                </p>
                <img className="blog_contents" src={process.env.PUBLIC_URL + `/assets/blog/speech_to_music/viz.png`} alt="speech_to_music"/>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Contents;
