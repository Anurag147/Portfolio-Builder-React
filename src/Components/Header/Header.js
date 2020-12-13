import React from 'react';
import './Header.css';

class Header extends React.Component
{//navbar-fixed-top
    render()
    {
        return (
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="a.com">Anurag A Asthana</a>
                      </div>
                      <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                          
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                          <li><a href="b.com">About</a></li>
                          <li><a href="f.com">Projects</a></li>
                          <li><a href="g.com">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                </nav>
        )
    }
}

export default Header;