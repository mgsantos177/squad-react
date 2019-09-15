/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const UserDrop = () => {
    return (
        <li id="dropdown-user" className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right">
                <span className="ic-user pull-right">

                    <i className="demo-pli-male"></i>
                </span>
            </a>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                <ul className="head-list">
                    <li>
                        <a href="#"><i className="demo-pli-male icon-lg icon-fw"></i> Profile</a>
                    </li>
                    <li>
                        <a href="#"><span className="badge badge-danger pull-right">9</span><i class="demo-pli-mail icon-lg icon-fw"></i> Messages</a>
                    </li>
                    <li>
                        <a href="#"><span className="label label-success pull-right">New</span><i class="demo-pli-gear icon-lg icon-fw"></i> Settings</a>
                    </li>
                    <li>
                        <a href="#"><i className="demo-pli-computer-secure icon-lg icon-fw"></i> Lock screen</a>
                    </li>
                    <li>
                        <a href="pages-login.html"><i className="demo-pli-unlock icon-lg icon-fw"></i> Logout</a>
                    </li>
                </ul>




            </div>

        </li>

    )
}

export default UserDrop;