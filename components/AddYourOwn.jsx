import React from 'react';
import styles from './AddYourOwn.module.css';

const AddYourOwn = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h5 className="card-title"><i className="bi bi-plus-circle"></i> Add your own</h5>
          <p className="card-text">
            Are you a teacher or expert? Do you sell or rent out equipment, venues or event tickets? Or, you know someone who should be on hobbycue? Go ahead and add your own page.
          </p>
          <button className="btn btn-primary">Add now</button>
        </div>
      </div>
    </div>
  );
}

export default AddYourOwn;
