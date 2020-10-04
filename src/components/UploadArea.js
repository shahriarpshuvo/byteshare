import React from 'react';
import { BsCloudUpload } from 'react-icons/bs';

const UploadArea = () => {
  return (
    <div className="upload-area">
      <BsCloudUpload />
      <div className="upload-area__text">
        <h3 className="upload-area__title">Drag and Drop or Upload File</h3>
        <p className="upload-area__subtitle">One file at a time, Less than 100 MB</p>
      </div>
    </div>
  );
};

export default UploadArea;
