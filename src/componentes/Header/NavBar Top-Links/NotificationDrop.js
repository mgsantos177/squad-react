/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';



const Notification = () => {
    return (
        <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                <i className="demo-pli-bell"></i>
                <span className="badge badge-header badge-danger"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                <div className="nano scrollable">
                    <div className="nano-content">
                        <ul className="head-list">
                            <li>
                                <a href="#" className="media add-tooltip" data-title="Used space : 95%" data-container="body" data-placement="bottom">
                                    <div className="media-left">
                                        <i className="demo-pli-data-settings icon-2x text-main"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="text-nowrap text-main text-semibold">HDD is full</p>
                                        <div className="progress progress-sm mar-no">
                                            <div style={{ width: "95%" }} className="progress-bar progress-bar-danger">
                                                <span className="sr-only">95% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="media" href="#">
                                    <div className="media-left">
                                        <i className="demo-pli-file-edit icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="mar-no text-nowrap text-main text-semibold">Write a news article</p>
                                        <small>Last Update 8 hours ago</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="media" href="#">
                                    <span className="label label-info pull-right">New</span>
                                    <div className="media-left">
                                        <i className="demo-pli-speech-bubble-7 icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="mar-no text-nowrap text-main text-semibold">Comment Sorting</p>
                                        <small>Last Update 8 hours ago</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="media" href="#">
                                    <div className="media-left">
                                        <i class="demo-pli-add-user-star icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="mar-no text-nowrap text-main text-semibold">New User Registered</p>
                                        <small>4 minutes ago</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="media" href="#">
                                    <div className="media-left">
                                        <img className="img-circle img-sm" alt="Profile" src="img/profile-photos/9.png" />
                                    </div>
                                    <div className="media-body">
                                        <p className="mar-no text-nowrap text-main text-semibold">Lucy sent you a message</p>
                                        <small>30 minutes ago</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="media" href="#">
                                    <div className="media-left">
                                        <img className="img-circle img-sm" alt="Profile" src="img/profile-photos/3.png" />
                                    </div>
                                    <div className="media-body">
                                        <p className="mar-no text-nowrap text-main text-semibold">Jackson sent you a message</p>
                                        <small>40 minutes ago</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pad-all bord-top">
                    <a href="#" className="btn-link text-main box-block">
                        <i className="pci-chevron chevron-right pull-right"></i>Show All Notifications
                    </a>
                </div>

            </div>
        </li>
    )
}

export default Notification;