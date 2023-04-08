// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default function Modal({ tags, largeImageURL, onClose }) {
//   useEffect(() => {
//     const pressKeyDown = e => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', pressKeyDown);
//     return () => {
//       window.addEventListener('keydown', pressKeyDown);
//     };
//   }, [onClose]);

//   const overlayClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <div onClick={overlayClick} className={css.Overlay}>
//       <div className={css.Modal}>
//         <img src={largeImageURL} alt={tags} />
//       </div>
//     </div>,
//     modalRoot
//   );
// }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keyClose);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyClose);
  }
  keyClose = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  overlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div onClick={this.overlayClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
export default Modal;
