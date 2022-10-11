import menuList from '../constants/menu';
import MenuItem from './MenuItem';

function Sidebar() {
    return (
        <div className="">
            <div className="sidebar__fixed--vertical">
                <nav className="sidebar__nav">
                    <ul>
                        {menuList.others.map((_) => (
                            <MenuItem {..._} />
                        ))}

                        <span className="Label">CUSTOMERS</span>
                        {menuList.customers.map((_) => (
                            <MenuItem {..._} />
                        ))}

                        <li>
                            <span className="Label">BUSINESSES</span>
                        </li>
                        {menuList.businesses.map((_) => (
                            <MenuItem {..._} />
                        ))}

                        <li>
                            <span className="Label">SETTINGS</span>
                        </li>
                        {menuList.settings.map((_) => (
                            <MenuItem {..._} />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
