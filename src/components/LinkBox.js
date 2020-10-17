import React, { useRef } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';

const LinkBox = ({ link }) => {
  const copyBoxRef = useRef();

  const copyToClipBoard = () => {
    copyBoxRef.current.select();
    copyBoxRef.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  return (
    <div className="linkbox">
      <p className="linkbox__instruction">COPY LINK TO CLIPBOARD</p>
      <div className="linkbox__container">
        <input
          ref={copyBoxRef}
          className="linkbox__link"
          value={`https://byteshare.netlify.app/files/${link}`}
          onClick={copyToClipBoard}
        />
        <RiFileCopyLine className="linkbox__copy" onClick={copyToClipBoard} />
      </div>
    </div>
  );
};

export default LinkBox;
