import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ClientSummary = ({client}) => {
  const { id, firstName, lastName, email, balance } = client;
  return (
    <Fragment>
      <tbody>
        <tr>
          <td>{firstName} {lastName}</td>
          <td>{email}l</td>
          <td>${parseFloat(balance).toFixed(2)}</td>
          <td>
            <Link to={`/client/${id}`} className="btn btn-outline-dark btn-sm">
              Details <i className="fas fa-arrow-circle-right"></i> 
            </Link>
          </td>
        </tr>
      </tbody>
    </Fragment>
  )
}

export default ClientSummary
