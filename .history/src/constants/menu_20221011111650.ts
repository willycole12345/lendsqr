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
        },

        { icon: userfriends, title: 'Guarantors', iconAlt: 'Guarantors' },
        { icon: userfriends, title: 'Loans', iconAlt: 'Loans' },
        { icon: userfriends, title: 'Decision M', iconAlt: 'Decision M' },
        { icon: userfriends, title: 'Savings', iconAlt: 'Savings' },
        { icon: userfriends, title: 'Loan Requests', iconAlt: 'Loan Requests' },
        { icon: userfriends, title: 'Whitelist', iconAlt: 'Whitelist' },
        { icon: userfriends, title: 'Karma', iconAlt: 'Karma' },
        { icon: userfriends, title: 'Organization', iconAlt: 'Organization' },
        { icon: userfriends, title: 'Loan Products', iconAlt: 'Loan Products' },
        { icon: userfriends, title: 'Savings Pro', iconAlt: 'Savings Pro' },
        { icon: userfriends, title: 'Fees and Ch', iconAlt: 'Fees and Ch' },
        { icon: userfriends, title: 'Transactions', iconAlt: 'Transactions' },
        { icon: userfriends, title: 'Services', iconAlt: 'Services' },
        { icon: userfriends, title: 'Service Ac', iconAlt: 'Service Ac' },
        { icon: userfriends, title: 'Settlements', iconAlt: 'Settlements' },
        { icon: userfriends, title: 'Reports', iconAlt: 'Reports' },
        { icon: userfriends, title: 'Preferences', iconAlt: 'Preferences' },
        { icon: userfriends, title: 'Fees and Pr', iconAlt: 'Fees and Pr' },
        { icon: userfriends, title: 'Audit Logs', iconAlt: 'Audit Logs' }
    ],
    businesses: [],
    settings: []
};
