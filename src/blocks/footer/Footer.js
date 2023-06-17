import React from 'react';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer id="footer" className="site-footer bg-color-custom">
            <div className="wrapper no-space">
                <div className="row">
                    <Copyright/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
