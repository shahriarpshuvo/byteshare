import React, { useRef } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import MailBox from './MailBox';

const LinkBox = ({ link }) => {
  const copyBoxRef = useRef();

  const copyToClipBoard = () => {
    copyBoxRef.current.select();
    copyBoxRef.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
    toast('Link copied to clipboard!');
  };

  return (
    <div className="linkbox">
      <p className="linkbox__instruction">COPY LINK TO CLIPBOARD</p>
      <div className="linkbox__container">
        <input
          ref={copyBoxRef}
          className="linkbox__link"
          value={`${process.env.REACT_APP_PUBLIC_URL}/files/${link}`}
          onChange={e => {}}
          onClick={copyToClipBoard}
        />
        <RiFileCopyLine className="linkbox__copy" onClick={copyToClipBoard} />
      </div>
      <MailBox link={link} />
    </div>
  );
};

export default LinkBox;
