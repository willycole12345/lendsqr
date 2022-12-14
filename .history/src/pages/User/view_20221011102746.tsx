import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AccountLayout from '../../components/Layout/AccountLayout';
import { avatar, full, star } from '../../images';
import { UserInterface } from '../../types';

function UserView() {
    const { userid } = useParams(),
        [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userid}`);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();

        return () => {};
    }, [userid]);

    if (!user) return <div className="">User Not Found</div>;
    else {
        const { profile, education, guarantor, socials } = user;
        return (
            <AccountLayout>
                <div className="dashboard">
                    <div className="col-md-12">
                        <div className="row">
                            <span className="dashboard_page_title">Users </span>
                        </div>
                    </div>
                    <div className="m-4"></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card wrapper_card card_shadow">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="username_wrapper">
                                            <div className="username_holder">
                                                {' '}
                                                <img className="userplace_holder" src={avatar} alt="brief" />
                                            </div>
                                            <div className="username">{user?.userName}</div>
                                            <span className="username--company">{user?.userName}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <h3 className="tier">Users Tier</h3>
                                        </div>
                                        <img className="" src={full} alt="brief" />
                                        <img className="" src={star} alt="brief" />
                                        <img className="" src={star} alt="brief2" />
                                    </div>
                                    <div className="col-md-3">
                                        <div className="balanceaccount">{user?.accountBalance}</div>
                                        <div className="accountnumber">
                                            {user?.accountNumber}/{user?.education.sector}
                                        </div>
                                    </div>
                                    <div className="row link_text_dis">
                                        <div className="col-md-2 active_placeholder">
                                            <h4 className="user_link_text active_list">General Details</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4 className="user_link_text">Document</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4 className="user_link_text">Bank Details</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4 className="user_link_text">Loans</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4 className="user_link_text">Savings</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4 className="user_link_text">App and System</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mrg_top"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card_shadow">
                                        <h3 className="profilecard"> Profile Information </h3>
                                        <div className="row">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Fullname</p>
                                                <h2 className="nameplace">
                                                    {profile?.firstName} {profile?.lastName}
                                                </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Phone number</p>
                                                <h2 className="nameplace">{profile?.phoneNumber}</h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Email Address </p>
                                                <h2 className="nameplace">{user?.email}</h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Bvn</p>
                                                <h2 className="nameplace">{profile?.bvn} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Gender</p>
                                                <h2 className="nameplace">{profile?.gender}</h2>
                                            </div>
                                        </div>
                                        <div className="row card__wrap__bottom">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Marital Status</p>
                                                <h2 className="nameplace">{profile?.firstName}</h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Children</p>
                                                <h2 className="nameplace">{profile?.firstName} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Type of Recidence</p>
                                                <h2 className="nameplace">{profile?.firstName} </h2>
                                            </div>
                                        </div>
                                        <hr />
                                        <h3 className="profilecard"> Education and Employment </h3>
                                        <div className="row">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Level of education </p>
                                                <h2 className="nameplace">{education.level} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Employment status </p>
                                                <h2 className="nameplace">{education.employmentStatus} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">sector of employment</p>
                                                <h2 className="nameplace">{education.sector} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">duration of employment</p>
                                                <h2 className="nameplace">{education.duration} </h2>
                                            </div>
                                        </div>
                                        <div className="row card__wrap__bottom">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Offical email</p>
                                                <h2 className="nameplace">{education.officeEmail} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Montly Income</p>
                                                <h2 className="nameplace">{education.monthlyIncome} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Repayment</p>
                                                <h2 className="nameplace">{education.loanRepayment} </h2>
                                            </div>
                                        </div>
                                        <hr className="hrstyle" />
                                        <h3 className="profilecard"> Social </h3>
                                        <div className="row">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Twitter</p>
                                                <h2 className="nameplace">{socials.twitter} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Facebook</p>
                                                <h2 className="nameplace">{socials.facebook}</h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Instagram</p>
                                                <h2 className="nameplace">{socials.instagram} </h2>
                                            </div>
                                        </div>{' '}
                                        <hr />
                                        <h3 className="profilecard"> Guarantor </h3>
                                        <div className="row">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Fullname</p>
                                                <h2 className="nameplace">
                                                    {guarantor.firstName} {guarantor.lastName}
                                                </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Phone Number</p>
                                                <h2 className="nameplace">{guarantor.phoneNumber} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Email Address</p>
                                                <h2 className="nameplace">{guarantor.address} </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Relationship</p>
                                                <h2 className="nameplace">{guarantor.gender} </h2>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Fullname</p>
                                                <h2 className="nameplace">Cole william </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Phone number</p>
                                                <h2 className="nameplace">Cole william </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Email Address</p>
                                                <h2 className="nameplace">Cole william </h2>
                                            </div>
                                            <div className="col-md-2 mrg_top padd">
                                                <p className="namestye">Relationship</p>
                                                <h2 className="nameplace">Cole william </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AccountLayout>
        );
    }
}

export default UserView;
