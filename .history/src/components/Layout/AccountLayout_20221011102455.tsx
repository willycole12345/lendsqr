import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

function AccountLayout() {
    return (
        <div className="container-fluid">
            <Header />
            <Sidebar />
        </div>
    );
}

export default AccountLayout;
