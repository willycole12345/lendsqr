import { briefcase, home, userfriends } from '../images';
import { menuItemProps } from '../types';

const menu: {
    others: menuItemProps[];
    customers: menuItemProps[];
    businesses: menuItemProps[];
    settings: menuItemProps[];
} = {
    others: [
        {
            icon: briefcase,
            title: 'Switch Organization',
            iconAlt: 'Switch Organization'
        },
        {
            icon: userfriends,
            title: 'Dashboard',
            iconAlt: 'dashboard'
        }
    ],
    customers: [
        {
            icon: userfriends,
            title: 'Users',
            iconAlt: 'user'
        }
    ],
    businesses: [],
    settings: []
};
