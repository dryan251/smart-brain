import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }) => {
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);
  const el = document.createElement('div');
  return ReactDOM.createPortal(children, el);
};

export default Modal;
