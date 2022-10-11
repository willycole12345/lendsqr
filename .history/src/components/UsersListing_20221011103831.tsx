import axios from 'axios';
import moment from 'moment';
import { forwardRef, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

import { moreDetails, userIcon } from '../images';
import { UserInterface } from '../types';

const status = [
    { color: 'success', label: 'active' },
    { color: 'secondary', label: 'inactive' },
    { color: 'warning', label: 'pending' },
    { color: 'danger', label: 'blacklisted' }
];
const MoreToggle = forwardRef(({ onClick }: any, ref: any) => (
    <img
        className="px-3 py-1"
        src={moreDetails}
        alt="logo"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

function UserListing() {
    const [records, setRecords] = useState<any[]>([]),
        [pending, setPending] = useState(true);

    const getRecords = async () => {
        try {
            const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
            setRecords(res.data);
            setPending(false);
        } catch (error) {}
    };
    useEffect(() => {
        getRecords();
    }, []);
    return (
        <>
            <DataTable
                customStyles={{}}
                columns={[
                    {
                        sortable: true,
                        name: 'Organization'.toLocaleUpperCase(),
                        selector: (row: UserInterface) => row.orgName
                    },
                    {
                        sortable: true,
                        name: 'Username'.toLocaleUpperCase(),
                        selector: (row: UserInterface) => row.userName
                    },
                    {
                        sortable: true,
                        name: 'Email'.toLocaleUpperCase(),
                        selector: (row: UserInterface) => row.email
                    },
                    {
                        sortable: true,
                        name: 'Phonenumber'.toLocaleUpperCase(),
                        selector: (row: UserInterface) => row.phoneNumber
                    },
                    {
                        sortable: true,
                        name: 'Data Joined'.toLocaleUpperCase(),
                        selector: (row: UserInterface) => row.createdAt
                    },
                    { name: 'Status'.toLocaleUpperCase(), selector: (row: UserInterface & { status: any }) => row.status(), width: '100px' },
                    { name: '', selector: (row: UserInterface & { status: any; action: any }) => row.action(), width: '80px', button: true, wrap: false, allowOverflow: true }
                ]}
                data={records.map((_) => {
                    const _status = status[Math.floor(Math.random() * 4)];
                    return {
                        ..._,
                        createdAt: moment(_.createdAt).format('MMMM Do YYYY, h:mm a'),
                        status: () => <span className={`badge rounded-pill bg-${_status.color} text-${_status.color} bg-opacity-10 p-2`}>{_status.label}</span>,
                        action: () => (
                            <Dropdown>
                                <Dropdown.Toggle as={MoreToggle} variant="transparent" id={`dropdown-${_.id}`} />
                                <Dropdown.Menu>
                                    <Link to={`/users/${_.id}`} className="d-block py-2 px-1">
                                        <img width={20} src={userIcon} alt="userpro" className="mx-2" />
                                        <small>View details</small>
                                    </Link>
                                    <Link to={`/users/${_.id}`} className="d-block py-2 px-1">
                                        <img width={20} src={userIcon} alt="userpro" className="mx-2" />
                                        <small>Blacklist User</small>
                                    </Link>
                                    <Link to={`/users/${_.id}`} className="d-block py-2 px-1">
                                        <img width={20} src={userIcon} alt="userpro" className="mx-2" />
                                        <small>Activate User</small>
                                    </Link>
                                    {/* <Link to={`/users/${record.id}`}><img src={userIcon} width={20} alt="logo" />  View Details</Link>
                        <Link to="#/action-2"><img src={userIcon} width={20} alt="logo" />  Another action</Link>
                        <Link to="#/action-3"><img src={userIcon} width={20} alt="logo" />  Something else</Link> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        )
                    };
                })}
                pagination
                progressPending={pending}
            />
        </>
    );
}
export default UserListing;
