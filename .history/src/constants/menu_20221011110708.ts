import { userfriends } from '../images';
import { menuItemProps } from '../types';

const menu: {
    others: menuItemProps[];
    customers: menuItemProps[];
    businesses: menuItemProps[];
    settings: menuItemProps[];
} = {
    others: [
        {
            icon: userfriends,
            title: 'Users',
            iconAlt: 'user'
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
