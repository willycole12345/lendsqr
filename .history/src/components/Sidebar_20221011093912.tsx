import React from "react";
import Briefcase from '../images/briefcase.png';
import Home_png from '../images/home_dash.png';
import Userfriends from '../images/user-friends.png';
import UsersPro from '../images/usersPro.png';
import Sackpro from '../images/sack_pro.png';
import Handshakeregular from '../images/handshake-regular.png';
import Piggybank from '../images/piggy-bank.png';
import Handholding from '../images/hand-holding.png';
import Usercheck from '../images/user-check.png';
import Usertimes from '../images/user-times.png';
import Npbank from '../images/np_bank.png';
import Coinssolid from '../images/coins-solid.png';
import Loanprod from '../images/briefss.png';
import Icon from '../images/icon.png';
import Vector from '../images/Vector_new.png';
import Serviceacc from '../images/serviceaccount.png';
import Settlement from '../images/settlement.png';
import Chart from '../images/chart.png';
import Prefence from '../images/prefence.png';
import Badgepercent from '../images/badge-percent.png';
import Auditlog from '../images/auditlog.png';

import '../styles/General.css';
import '../styles/Custom.css';
function Sidebar() {
      return (
                  <div className="">
                    <div className="sidebar__fixed--vertical">
                      <nav className="sidebar__nav">
                         <ul>
                           <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"> <img  className="imgs_holder" src={Briefcase} alt="brief"/>  </span>
                                  <span className="sidebar__label organzation_color"> Switch Organization </span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"> <img  className="imgs_holder" src={Home_png} alt="briefcase"/> </span>
                                  <span className="sidebar__label">Dashboard </span>
                               </a>
                             </li>
                             <span className="Label">CUSTOMERS</span>
                             <li className="sidebar__list active">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Userfriends} alt="user"/>  </span>
                                  <span className="sidebar__label">Users</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"> <img  className="imgs_holder" src={UsersPro} alt="userpro"/> </span>
                                  <span className="sidebar__label">Guarantors</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Sackpro} alt="userpro"/>  </span>
                                  <span className="sidebar__label">Loans</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Handshakeregular} alt="handshake"/> </span>
                                  <span className="sidebar__label">Decision Models</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Piggybank} alt="piggy"/> </span>
                                  <span className="sidebar__label">Savings</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Handholding} alt="handholding"/> </span>
                                  <span className="sidebar__label">Loan Requests</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Usercheck} alt="whitelist"/> </span>
                                  <span className="sidebar__label">Whitelist</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#"className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Usertimes} alt="white"/> </span>
                                  <span className="sidebar__label">Karma</span>
                               </a>
                             </li>
                             <li>
                             <span className="Label">BUSINESSES</span>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons"><img  className="imgs_holder" src={Briefcase} alt="case"/>  </span>
                                  <span className="sidebar__label">Organization</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons">  <img  className="imgs_holder" src={Loanprod} alt="loan"/> </span>
                                  <span className="sidebar__label"> Loan Products</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#"className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Npbank} alt="bank"/> </span>
                                  <span className="sidebar__label">Savings Products</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                 <span className="sidebar__icons">  <img  className="imgs_holder" src={Coinssolid} alt="brief"/>  </span>
                                  <span className="sidebar__label">Fees and Charges</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                                    <span className="sidebar__icons">  <img  className="imgs_holder" src={Icon} alt="Icon"/>  </span>
                                  <span className="sidebar__label">Transactions</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Vector} alt="Vector"/>  </span>
                                  <span className="sidebar__label">Services</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Serviceacc} alt="Serviceacc"/>  </span>
                                  <span className="sidebar__label">Service Account</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Settlement} alt="settlement"/>  </span>
                                  <span className="sidebar__label">Settlements</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Chart} alt="chart"/>  </span>
                                  <span className="sidebar__label">Reports</span>
                               </a>
                             </li>
                             <li>
                             <span className="Label">SETTINGS</span>
                             </li>
                             <li className="sidebar__list">
                              <a  href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Prefence} alt="prefence"/>  </span>
                               <span className="sidebar__label">Preferences</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Badgepercent} alt="Badgepercent"/>  </span>
                                  <span className="sidebar__label">Fees and Pricing</span>
                               </a>
                             </li>
                             <li className="sidebar__list">
                              <a href="/#" className="sidebar__nav__link">
                              <span className="sidebar__icons">  <img  className="imgs_holder" src={Auditlog} alt="auditlog"/>  </span>
                                  <span className="sidebar__label">Audit Logs</span>
                               </a>
                             </li>
                         </ul>           
                      </nav>
                    </div>
                  </div>
      );
  }

 export default Sidebar;
