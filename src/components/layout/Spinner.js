import React, { Fragment } from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-10">
            <div className="text-center">
              <ClipLoader
                sizeUnit={"px"}
                size={40}
                color={'#ff9800'}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Spinner;
