import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ImDownload, ImSpinner2, ImArrowLeft2, ImArrowDown2 } from 'react-icons/im';
import { BiMessageAltError } from 'react-icons/bi';

import { getFile } from '../config/api';

const FileDownloader = () => {
  const [loader, setLoader] = useState(true);
  const [found, setFound] = useState(false);
  const [data, setData] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const api = async () => {
      const response = await getFile(id);
      setLoader(false);
      if (response.error) return;
      setData(response);
      setFound(true);
    };
    api();
  }, [id]);

  const filesizeFormatter = filesize => {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(filesize / (1024 * 1024));
  };

  return (
    <>
      {loader && (
        <div className="page-loader">
          <ImSpinner2 className="page-loader__icon anim-rotate" />
        </div>
      )}

      <div className="files">
        <div className="files__container">
          {!found ? (
            <div className="files__notfound">
              <BiMessageAltError className="files__notfound--icon" />
              <h2 className="files__notfound--title">File Not Found</h2>
              <Link to="/" className="button button--sub files__download">
                <ImArrowLeft2 />
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="files__found">
              <ImDownload className="files__icon" />
              <h2 className="files__title">Your file is ready to download!</h2>
              <p className="files__info">Files get deleted automatically after 24hrs.</p>
              <p className="files__filename">{data.filename}</p>
              <p className="files__filesize">
                {data.size / (1024 * 1024) < 1 ? 'Less than <  1' : filesizeFormatter(data.size)} MB
              </p>
              <a
                href={`${process.env.REACT_APP_API_URL}/download/${id}`}
                className="button button--sub files__download"
              >
                <ImArrowDown2 />
                Download Now
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileDownloader;
