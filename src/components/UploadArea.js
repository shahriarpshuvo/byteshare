import React, { useEffect, useState, useRef } from 'react';
import { BsCloudUpload } from 'react-icons/bs';

import { toast } from 'react-toastify';

import { submitFile } from '../config/api';
import ProgressBar from './ProgressBar';
import LinkBox from './LinkBox';

const UploadArea = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Filename');
  const [uploadRes, setUploadRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [dragged, setDragged] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    const api = async () => {
      if (file) {
        const config = {
          onUploadProgress: function (progressEvent) {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setLoadingPercentage(percentCompleted);
          }
        };
        const data = new FormData();
        data.append('uploadFile', file);
        const response = await submitFile(data, config);

        if (response.success) {
          toast('File Uploaded Successfully!');
          setUploadRes(response);
        } else toast(response);
      }
    };
    api();
  }, [file]);

  const onDropHandler = e => {
    e.preventDefault();
    setDragged(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const clickToUpload = () => fileInputRef.current.click();

  const uploadFile = () => {
    if (fileInputRef.current.files.length) handleFiles(fileInputRef.current.files);
  };

  const handleFiles = files => {
    if (files.length > 1) return toast.error('Please upload one file at a time.');
    if (parseFloat(files[0].size / (1024 * 1024)) >= 100) return toast('File size must be less than < 100 MB.');
    setFile(files[0]);
    setFilename(files[0].name);
    setLoading(true);
  };

  const uploadAgain = () => {
    setLoading(false);
    setUploadRes({});
  };

  return (
    <>
      {!loading && (
        <div className="upload-area">
          <div
            className={`upload-area__container${dragged ? ' dragged' : ''}`}
            onDragOver={e => {
              e.preventDefault();
              setDragged(true);
            }}
            onDragLeave={e => {
              e.preventDefault();
              setDragged(false);
            }}
            onDrop={onDropHandler}
            onClick={clickToUpload}
          >
            <BsCloudUpload />
            <div className="upload-area__text">
              <h3 className="upload-area__title">Drag and Drop or Click to Upload File</h3>
              <p className="upload-area__subtitle">One file at a time, Less than 100 MB</p>
              <label htmlFor="upload-area__file">
                <input type="file" name="uploadFile" id="upload-area__file" ref={fileInputRef} onChange={uploadFile} />
              </label>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <ProgressBar
          loadingPercentage={loadingPercentage}
          filename={filename}
          uploadSuccess={uploadRes.success}
          uploadAgain={uploadAgain}
        />
      )}

      {uploadRes.link && <LinkBox link={uploadRes.link} />}
    </>
  );
};

export default UploadArea;
