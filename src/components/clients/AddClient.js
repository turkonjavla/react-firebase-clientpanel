import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addClient } from '../../redux/actions/';

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      balance: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newClient = this.state;

    if(newClient.balance === '') {
      newClient.balance = 0;
    }

    this.props.addClient(newClient);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
       <div className="row justify-content-center">
         <div className="col-md-6">
         <Link to="/" className="btn btn-link ">
            <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
          </Link>
          <div className="card">
            <div className="card-header">Add Client</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="firstName"
                    minLength="2"
                    required
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="lastName"
                    minLength="2"
                    required
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    name="email"
                    minLength="2"
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="text" 
                      className="form-control"
                      name="phone"
                      minLength="10"
                      required
                      onChange={this.handleChange}
                      value={this.state.phone}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input 
                      type="text" 
                      className="form-control"
                      name="balance"
                      onChange={this.handleChange}
                      value={this.state.balance}
                    />
                  </div>
                <input type="submit" value="Submit" className="btn btn-block btn-outline-primary"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addClient: (client) => dispatch(addClient(client))
  }
}

export default connect(null, mapDispatchToProps)(AddClient);
