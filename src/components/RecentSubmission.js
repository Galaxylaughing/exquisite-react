import React from 'react';
import PropType from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = ({ submission }) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ submission }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  submission: PropType.string.isRequired,
}

export default RecentSubmission;
