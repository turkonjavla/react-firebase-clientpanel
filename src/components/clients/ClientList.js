import React from 'react';
import ClientSummary from './ClientSummary';

const ClientList = () => {
  // clients will be replaced with firebase 
  const clients = [
    {
      id: 1,
      firstName: 'Vladimir',
      lastName: 'Turkonja',
      email: 'turkonja@gmail.com',
      balance: '30',
      phone: '333-111-5432'
    },
    {
      id: 2,
      firstName: 'Karen',
      lastName: 'Smith',
      email: 'karen@gmail.com',
      balance: '141',
      phone: '511-564-1222'
    }
  ];
  const clientList = clients && clients.map(client => <ClientSummary key={client.id} client={client} />);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        {
          clients ? clientList : <h1>Loading</h1>
        }
      </table>
    </div>
  )
}

export default ClientList
