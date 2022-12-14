import React from "react";
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import UserListing from "../components/UsersListing";
import '../styles/General.css';
import '../styles/Custom.css';
import DataCard from "../components/DataCard";
import { activeusers, loanUsers, saving, userIcon } from "../images";
function Dashboard() {
    
     
      return (
                 
      <div className="container-fluid">
                   <Header />
                   <Sidebar />
            <div className="dashboard">
                   <div className="col-md-12">
                        <div className="row">
                        <span className="dashboard_page_title">Users </span>
                       </div>
                   </div>
                   <div className="m-4"></div>
                   <div className="row">
                        <div className="col-md-12">
                              <div className="row">
                              <div className="col-md-3">
                                    <DataCard userIcon={userIcon} label={'Users'} count={2853} />
                            </div>
                            <div className="col-md-3">
                                <DataCard userIcon={activeusers} label={'Active Users'} count={2453} />
                            </div>
                            <div className="col-md-3">
                                <DataCard userIcon={loanUsers} label={'Users With Loans'} count={12453} />
                            </div>
                            <div className="col-md-3">
                                <DataCard userIcon={saving} label={'Users with savings'} count={102435} />
                                 </div>
                              </div>
                        </div>
                        <div className="mrg_top">
                            <div className="card">
                                <div className="col-md-12">
                                    <div className="">
                                            <UserListing />
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
      </div>
      );
  }


 export default Dashboard;
