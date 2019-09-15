/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MegaDrop = () => {
    return (
        <li className="mega-dropdown">
            <a href="#" className="mega-dropdown-toggle">
                <i className="demo-pli-layout-grid"></i>
            </a>

            <div className="dropdown-menu mega-dropdown-menu">
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <ul className="list-unstyled">
                            <li className="dropdown-header"><i className="demo-pli-file icon-lg icon-fw"></i> Pages</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Search Result</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Sreen Lock</a></li>
                            <li><a href="#">Maintenance</a></li>
                            <li><a href="#">Invoice</a></li>
                            <li><a href="#" className="disabled">Disabled</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3">
                        {/* Mega menu list */}
                        <ul className="list-unstyled">
                            <li className="dropdown-header"><i className="demo-pli-mail icon-lg icon-fw"></i> Mailbox</li>
                            <li><a href="#"><span className="pull-right label label-danger">Hot</span>Indox</a></li>
                            <li><a href="#">Read Message</a></li>
                            <li><a href="#">Compose</a></li>
                            <li><a href="#">Template</a></li>
                        </ul>
                        <p className="pad-top text-main text-sm text-uppercase text-bold"><i
                            className="icon-lg demo-pli-calendar-4 icon-fw"></i>News</p>
                        <p className="pad-top mar-top bord-top text-sm">Sulamerica entra na lista das empresas mais valiosas do País.</p>
                    </div>
                    <div className="col-sm-4 col-md-3">
                        <ul class="list-unstyled">
                            <li>
                                <a href="#" className="media mar-btm">
                                    <span className="badge badge-success pull-right">90%</span>
                                    <div className="media-left">
                                        <i className="demo-pli-data-settings icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="text-semibold text-main mar-no">Data Backup</p>
                                        <small className="text-muted">This is the item description</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="media mar-btm">
                                    <div className="media-left">
                                        <i className="demo-pli-support icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="text-semibold text-main mar-no">Support</p>
                                        <small className="text-muted">This is the item description</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="media mar-btm">
                                    <div className="media-left">
                                        <i className="demo-pli-computer-secure icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="text-semibold text-main mar-no">Security</p>
                                        <small className="text-muted">This is the item description</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="media mar-btm">
                                    <div className="media-left">
                                        <i className="demo-pli-map-2 icon-2x"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="text-semibold text-main mar-no">Location</p>
                                        <small className="text-muted">This is the item description</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <p className="dropdown-header"><i className="demo-pli-file-jpg icon-lg icon-fw"></i> Gallery</p>
                        <div className="row img-gallery">
                            <div className="row img-gallery">
                                <div className="col-xs-4">
                                    <img className="img-responsive" src="img/thumbs/img-1.jpg" alt="thumbs" />
                                </div>
                                <div className="col-xs-4">
                                    <img className="img-responsive" src="img/thumbs/img-3.jpg" alt="thumbs" />
                                </div>
                                <div className="col-xs-4">
                                    <img className="img-responsive" src="img/thumbs/img-2.jpg" alt="thumbs" />
                                </div>
                                <div className="col-xs-4">
                                    <img className="img-responsive" src="img/thumbs/img-4.jpg" alt="thumbs" />
                                </div>
                                <div className="col-xs-4">
                                    <img className="img-responsive" src="img/thumbs/img-6.jpg" alt="thumbs" />
                                </div>
                                <div class="col-xs-4">
                                    <img class="img-responsive" src="img/thumbs/img-5.jpg" alt="thumbs" />
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Browse Gallery</a>
                        </div>

                    </div>
                </div>
            </div>
        </li>
    )
}

export default MegaDrop;