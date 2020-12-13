import React from 'react';
import './Footer.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div className="footer navbar-fixed-bottom col-md-12">
                <div className="copyright col-md-10">
                    <span>
                        &#169; Anurag Asthana, 2020
                    </span> 
                </div>
                <div className="social col-md-2">
                    <span className="icons">
                        <i class="fa fa-linkedin"></i>
                    </span>
                    <span className="icons">
                        <i class="fa fa-instagram"></i>
                    </span>
                    <span className="icons">
                        <i class="fa fa-github"></i>
                    </span>
                    <span className="icons">
                        <i class="fa fa-youtube"></i>
                    </span>
                </div>                            
            </div>
        )
    }
}

export default Footer;