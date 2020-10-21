import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { BiRotateLeft } from 'react-icons/bi';

const ProgressBar = ({ loadingPercentage, filename, uploadSuccess, uploadAgain }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__box">
        <div className="progress-bar__bg-indicator" style={{ width: `${loadingPercentage}%` }}></div>
        <div className="progress-bar__percentage">
          <>
            {uploadSuccess ? (
              <button className="button button--outline" onClick={uploadAgain}>
                <BiRotateLeft />
                Upload Again
              </button>
            ) : (
              <span>
                <ImSpinner2
                  className="progress-bar__spinner anim-rotate"
                  style={{ display: uploadSuccess ? 'none' : 'inline-block' }}
                />
                Uploading...
              </span>
            )}
          </>
          <span>{loadingPercentage}%</span>
        </div>
        <p className="progress-bar__filename">{filename}</p>
        <div className="progress-bar__indicator" style={{ width: `${loadingPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
