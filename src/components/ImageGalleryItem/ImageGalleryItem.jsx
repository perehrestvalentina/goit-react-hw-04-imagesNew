import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image }) {
  const [openModal, setOpenModal] = useState(false);
  const changeModal = () => {
    setOpenModal(prev => !prev);
  };
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={image.webformatURL}
          alt={image.tags}
          onClick={changeModal}
        />
        {openModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={setOpenModal}
          />
        )}
      </li>
    </>
  );
}
