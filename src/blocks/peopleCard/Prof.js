import React from 'react';
import LinkButton from '../../components/button/LinkButton';
import DownloadButton from '../../components/button/DownloadButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Fragment } from 'react';

const Prof = ({ProfData}) => { 
    const icons = {
        'cv': <i class="ai ai-cv ai-2x"></i>,
        'google scholar': <i class="ai ai-google-scholar ai-2x"></i>,
        'github': <FontAwesomeIcon icon={faGithub} size='2xl'/>,
        'linkedin': <FontAwesomeIcon icon={faLinkedin} size='2xl'/>,
        'twitter': <FontAwesomeIcon icon={faTwitter} size='2xl'/>
    };

    return (
        <section id="page-content" className="spacer">
            <div className="peoplecard">
                <div className="wrapper">
                    <div className="prof_cardwrapper">
                        {ProfData.map((item) => {
                            return (
                                <div className="img_div">
                                    <figure>
                                        <img className="prof_img" src={process.env.PUBLIC_URL + `/assets/img/people/`+ item.img} 
                                            alt={item.title}/>
                                        <figcaption 
                                            style={{textAlign: 'center', fontSize:0.3+'em', marginTop:0.5+'em'}}>
                                            drawing by <a href='https://www.joonhyungbae.com/'>Joonhyung</a>.
                                        </figcaption>
                                    </figure>
                                    
                                    <div className="info_div">
                                        <h4>{item.title}</h4>
                                        <p>AI researcher <br/>
                                        M.S. Student @ <a href='https://mac.kaist.ac.kr/'>Music and Audio Computing Lab</a> 
                                        &nbsp;(<a href="https://mac.kaist.ac.kr/~juhan/">Prof. Juhan Nam</a>). <br/> 
                                        Research Interest: Machine Learning, Music & Audio Information Retrieval, Multimodal Generation. <br/>
                                        james39@kaist.ac.kr
                                        </p>
                                        <div className="btn_div">
                                            {/* <DownloadButton 
                                                keyword = "cv"
                                                link= {process.env.PUBLIC_URL + `/assets/cv/CV_seungheon.pdf`}
                                                position = ""
                                                textcolor = "has-white-color"
                                                backgroundcolor = "has-gray-dark-background-color"
                                            /> */}
                                            {Object.keys(item.material).map((key_name, index) => {
                                                    return(
                                                        <Fragment>
                                                        {/* <LinkButton 
                                                            keyword = {key_name} 
                                                            link={item.material[key_name]}
                                                            position = "inline"
                                                            textcolor = "has-white-color"
                                                            backgroundcolor = "has-gray-dark-background-color"
                                                        /> */}
                                                        <a href={item.material[key_name]} 
                                                            className={`btn ${index===0 ? '' : 'inline'} 
                                                                    has-white-color has-gray-dark-background-color`}
                                                        >
                                                            {icons[key_name]}
                                                        </a>
                                                        </Fragment>
                                                    );
                                                })
                                            }

                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prof;
