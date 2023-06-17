import React from 'react';
import LinkButton from '../../components/button/LinkButton'

const Hnr = ({HnrInfoData}) => {
    const Honors = HnrInfoData['Honors']
    // const Talk = HnrInfoData['Talk']
    // const Teaching = HnrInfoData['Teaching']
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="wrapper">
                    <h4>Award & Honors</h4>
                    <div className="honors">
                    
                    <h5>Honors</h5>
                    {Honors.map((item) => {
                        if (item.link === ""){
                            return (
                                <>
                                    <h6> {item.title} </h6>
                                    {
                                        item.date === "" ? (<>{item.contents.split('\n').map((line) => <p>{line}</p>)}</>) 
                                        : (<p> {item.contents} | {item.date} </p>)
                                    }
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <h6> {item.title} </h6>
                                    <p> {item.contents} | {item.date} 
                                        <LinkButton 
                                            keyword = "Link" 
                                            link={item.link}
                                            position = "inline"
                                            textcolor = "has-white-color"
                                            backgroundcolor = "has-gray-dark-background-color"
                                        />
                                    </p>
                                </>
                            );
                        }
                    } ) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hnr;
