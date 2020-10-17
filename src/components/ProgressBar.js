import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const ProgressBar = ({ loadingPercentage, filename, uploadSuccess }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__box">
        <div className="progress-bar__bg-indicator" style={{ width: `${loadingPercentage}%` }}></div>
        <div className="progress-bar__percentage">
          <span>Uploading...</span>{' '}
          <span>
            {loadingPercentage}%{' '}
            <ImSpinner2 className="anim-rotate" style={{ display: uploadSuccess ? 'none' : 'inline-block' }} />
          </span>
        </div>
        <p className="progress-bar__filename">{filename}</p>
        <div className="progress-bar__indicator" style={{ width: `${loadingPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
