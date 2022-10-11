import React from 'react';
import Logo from '../images/Group.png';
import vector from '../images/Vector.png';
import Bell from '../images/bell.png';
import Drop from '../images/drop.png';
import '../styles/General.css';
import '../styles/Custom.css';
function Header() {
    return (
        <div className="Wrapper">
            <div className="container-fluid">
                <div className="wrap">
                    <div className="logo_slider">
                        <img className="img_class pull_left" src={Logo} alt="logo" />
                    </div>
                    <div className="display_full">
                        <div className="search">
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <span className="input-group-text">
                                    {' '}
                                    <img className="" src={vector} alt="vector" />
                                </span>
                            </div>
                        </div>
                        <div className="pull_right">
                            <div className="nav-listing">
                                <ul className="list_style">
                                    <li className="list_item">Doc</li>
                                    <li className="list_item">
                                        <img src={Bell} alt="bell" />
                                    </li>
                                    <li className="list_item">
                                        {' '}
                                        Adedeji <img src={Drop} alt="drop" />{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mobile_view">
                        <div className="search_mobile">
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <span className="input-group-text">
                                    {' '}
                                    <img className="" src={vector} alt="vector" />
                                </span>
                            </div>
                        </div>
                        <div className="pull_right">
                            <div className="nav-listing_mobile">
                                <ul className="list_item_moblie">
                                    <li className="list_item_moblie">Doc</li>
                                    <li className="list_item_moblie">
                                        <img src={Bell} alt="bell" />
                                    </li>
                                    <li className="list_item_moblie">
                                        {' '}
                                        Adedeji <img src={Drop} alt="drop" />{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
