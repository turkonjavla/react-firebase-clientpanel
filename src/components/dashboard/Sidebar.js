import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      <Link to="/client/add" className="btn btn-outline-success btn-block">Add Client</Link>
    </Fragment>
  )
}

export default Sidebar;
