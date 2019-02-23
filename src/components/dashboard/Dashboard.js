import React from 'react';
import Sidebar from './Sidebar';
import Clients from '../clients/Clients';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <Clients />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
