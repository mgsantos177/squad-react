/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './styles.css'

import Notification from './NavBar Top-Links/NotificationDrop'
import UserDrop from './NavBar Top-Links/userDropdow';
import MegaDrop from './NavBar Top-Links/MegaDropdow';

class HeaderGeral extends React.Component {
    render() {
        return (
            <header>
                {/* Logo name */}
                <div id="navbar-container" className="boxed">
                    <a href="index.html" className="navbar-brand">
                        <img src="img/logo.png" alt="Nifty Logo" className="brand-icon" />
                        <div className="brand-title">
                            <span className="brand-text">Nifty</span>
                        </div>
                    </a>
                    {/* Navbar Dropdown */}
                </div>
                <div className="navbar-content">
                    <ul className="nav navbar-top-links">
                        {/* Navigation toogle button */}
                        <li className="tgl-menu-btn">
                            <a className="mainnav-toggle" href="#">
                                <i className="demo-pli-list-view"></i>
                            </a>
                        </li>
                        <li>
                            <div className="custom-search-form">
                                <label className="btn btn-trans" for="search-input" data-toggle="collapse" data-target="#nav-searchbox">
                                    <i className="demo-pli-magnifi-glass"></i>
                                </label>

                                <form>
                                    <div className="search-container collapse" id="nav-searchbox">
                                        <input id="search-input" type="text" className="form-control" placeholder="Type for search..." />
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav navbar-top-links">
                        <MegaDrop />
                        <Notification />
                        <UserDrop />
                        <li>
                            <a href="#" class="aside-toggle">
                                <i class="demo-pli-dot-vertical"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default HeaderGeral