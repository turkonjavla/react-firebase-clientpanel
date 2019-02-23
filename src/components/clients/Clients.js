import React, { Component, Fragment } from 'react';
import ClientList from './ClientList';

class Clients extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users"> Clients</i>
            </h2>
          </div>
          <div className="col-md-6"></div>
        </div>
        <ClientList />
      </Fragment>
    )
  }
}

export default Clients;