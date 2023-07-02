import {React, TouchableOpacity} from 'react';

const Ind = ({IndInfoData}) => { 
    return (
        <section id="page-content" className="spacer p-top-lg p-bottom-lg">
            <div id="blog">
                <div className="industry wrapper">
                    <h4>Experience</h4>
                    <div className="eduacation">
                    { IndInfoData.map((item) => {
                            return (
                                <>
                                    {item.link !== undefined
                                        ? (<h6><a href={item.link}>{ item.institution }</a></h6>)
                                        : (<h6>{ item.institution }</h6>)
                                    }
                                    <p>
                                        { item.position } 
                                    </p>
                                    <p className="date">
                                        {item.advisor !== undefined ? (<span>{ item.advisor }<br/></span>) : null}
                                    </p>
                                    <p className="date">
                                        { item.location } | { item.duration }
                                    </p>
                                </>
                            );
                        } ) }
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Ind;
