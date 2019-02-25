import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import ClientSummary from './ClientSummary';
import Spinner from '../layout/Spinner';

class ClientList extends Component {
  state = {
    totalOwed: null
  };
  
  static getDerivedStateFromProps(props) {
    const { clients } = props;

    if(clients) {
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString())
      }, 0);
      return {
        totalOwed: total
      }
    }
    return null;
  }

  render() {
    const { clients } = this.props;
    const clientList = clients && clients.map(client => <ClientSummary key={client.id} client={client} />);

    if(clientList) {
      return (
        <div>
          <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users"> Clients</i>
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-secondary">
              Total Owed: {' '} <span className="text-primary">${parseFloat(this.state.totalOwed).toFixed(2)}</span>
            </h5>
          </div>
          <div className="col-md-6"></div>
        </div>
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
              clientList
            }
          </table>
        </div>
      )
    }
    else {
      return (
        <Spinner />
      )
    }
  }
}

ClientList.propTypes = {
  firestore: PropTypes.object.isRequired,
  clinets: PropTypes.array
}

const mapStateToProps = state => {
  return {
    clients: state.firestore.ordered.clients
  }
}

const firestoreCollection = firestoreConnect([
  { collection: 'clients' }
]);

export default compose(
  connect(mapStateToProps),
  firestoreCollection
)(ClientList)
