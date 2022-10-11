import {
    auditlog,
    badgepercent,
    briefcase,
    chart,
    coinssolid,
    handholding,
    handshakeregular,
    home,
    icon,
    loanprod,
    npbank,
    piggybank,
    prefence,
    sackpro,
    serviceacc,
    settlement,
    usercheck,
    userfriends,
    usersPro,
    usertimes,
    vectorNew
} from '../images';

const MenuItem = () => (
    <li className="sidebar__list active">
        <a href="/#" className="sidebar__nav__link">
            <span className="sidebar__icons">
                <img className="imgs_holder" src={userfriends} alt="user" />{' '}
            </span>
            <span className="sidebar__label">Users</span>
        </a>
    </li>
);

function Sidebar() {
    return (
        <div className="">
            <div className="sidebar__fixed--vertical">
                <nav className="sidebar__nav">
                    <ul>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={briefcase} alt="brief" />{' '}
                                </span>
                                <span className="sidebar__label organzation_color"> Switch Organization </span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={home} alt="briefcase" />{' '}
                                </span>
                                <span className="sidebar__label">Dashboard </span>
                            </a>
                        </li>
                        <span className="Label">CUSTOMERS</span>
                        <li className="sidebar__list active">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={userfriends} alt="user" />{' '}
                                </span>
                                <span className="sidebar__label">Users</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={usersPro} alt="userpro" />{' '}
                                </span>
                                <span className="sidebar__label">Guarantors</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={sackpro} alt="userpro" />{' '}
                                </span>
                                <span className="sidebar__label">Loans</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={handshakeregular} alt="handshake" />{' '}
                                </span>
                                <span className="sidebar__label">Decision Models</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={piggybank} alt="piggy" />{' '}
                                </span>
                                <span className="sidebar__label">Savings</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={handholding} alt="handholding" />{' '}
                                </span>
                                <span className="sidebar__label">Loan Requests</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={usercheck} alt="whitelist" />{' '}
                                </span>
                                <span className="sidebar__label">Whitelist</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={usertimes} alt="white" />{' '}
                                </span>
                                <span className="sidebar__label">Karma</span>
                            </a>
                        </li>
                        <li>
                            <span className="Label">BUSINESSES</span>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    <img className="imgs_holder" src={briefcase} alt="case" />{' '}
                                </span>
                                <span className="sidebar__label">Organization</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={loanprod} alt="loan" />{' '}
                                </span>
                                <span className="sidebar__label"> Loan Products</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={npbank} alt="bank" />{' '}
                                </span>
                                <span className="sidebar__label">Savings Products</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={coinssolid} alt="brief" />{' '}
                                </span>
                                <span className="sidebar__label">Fees and Charges</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={icon} alt="Icon" />{' '}
                                </span>
                                <span className="sidebar__label">Transactions</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={vectorNew} alt="Vector" />{' '}
                                </span>
                                <span className="sidebar__label">Services</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={serviceacc} alt="Serviceacc" />{' '}
                                </span>
                                <span className="sidebar__label">Service Account</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={settlement} alt="settlement" />{' '}
                                </span>
                                <span className="sidebar__label">Settlements</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={chart} alt="chart" />{' '}
                                </span>
                                <span className="sidebar__label">Reports</span>
                            </a>
                        </li>
                        <li>
                            <span className="Label">SETTINGS</span>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={prefence} alt="prefence" />{' '}
                                </span>
                                <span className="sidebar__label">Preferences</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={badgepercent} alt="Badgepercent" />{' '}
                                </span>
                                <span className="sidebar__label">Fees and Pricing</span>
                            </a>
                        </li>
                        <li className="sidebar__list">
                            <a href="/#" className="sidebar__nav__link">
                                <span className="sidebar__icons">
                                    {' '}
                                    <img className="imgs_holder" src={auditlog} alt="auditlog" />{' '}
                                </span>
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
