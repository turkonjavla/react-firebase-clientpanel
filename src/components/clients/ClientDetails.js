import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class ClientDetails extends Component {
  render() {
    const { client } = this.props;
    console.log(client)
    if(client) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <div className="i fas fa-arrow-circle-left"></div> Dashboard
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-outline-dark"><i className="fas fa-edit"></i> Edit</Link>
                <button className="btn btn-danger"><i className="fas fa-times-circle"></i> Remove</button>
              </div>
            </div>
          </div>
          <hr/>
          <div className="card">
            <h4 className="card-header">
              { client.firstName } { client.lastName }
            </h4>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h5>Client ID: {' '} <span className="text-secondary">{ client.id }</span></h5>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h5 className="pull-right">Balance: ${ parseFloat(client.balance).toFixed(2) }</h5>
                </div>
              </div>
              <hr/>
              <ul className="list-group">
                <li className="list-group-item">Contact Email: { client.email }</li>
                <li className="list-group-item">Contact Phone { client.phone }</li>
              </ul>
            </div>
          </div>
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

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired
}

const mapStateToProps = ({ firestore: { ordered }}) => {
  return {
    client: ordered.client && ordered.client[0]
  }
}

const firestoreData = firestoreConnect(props => [
  { 
    collection: 'clients',
    storeAs: 'client',
    doc: props.match.params.id
   }
]);

export default compose(
  firestoreData,
  connect(mapStateToProps)
)(ClientDetails);