import React from 'react';
import LinkButton from '../../components/button/LinkButton'

const Service = ({ServiceInfoData}) => {
    const Service = ServiceInfoData['Service']
    const Talk = ServiceInfoData['Talk'] || []
    // const Teaching = ServiceInfoData['Teaching']
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="wrapper">
                    <h4>Academic Service, Talk</h4>
                    <div className="services">
                    
                    {/* <h5>Service</h5> */}
                    {Service.map((item) => {
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
                    {Talk.length > 0 ? (
                        <>
                            <h6>Talks</h6>
                            {Talk.map((item) => (
                                <p className="services-talk" key={`${item.title}-${item.date}`}>
                                    {item.link === "" ? item.title : <a className="services-talk-link" href={item.link}>{item.title}</a>}, {item.contents} | {item.date}
                                </p>
                            ))}
                        </>
                    ) : ""}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
