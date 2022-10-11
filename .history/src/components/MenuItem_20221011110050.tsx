import { menuProps } from '../types';

const MenuItem = ({ isActive = false, icon, iconAlt, title, href = '/#' }: menuProps) => (
    <li className={`sidebar__list ${isActive ? 'active' : ''}`}>
        <a href={href} className="sidebar__nav__link">
            <span className="sidebar__icons">
                <img className="imgs_holder" src={icon} alt={iconAlt} />
            </span>
            <span className="sidebar__label">{title}</span>
        </a>
    </li>
);

export default MenuItem;
