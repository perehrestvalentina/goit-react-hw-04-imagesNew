import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as API from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import css from './App.module.css';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    async function addImages() {
      try {
        setIsLoading(true);
        const data = await API.getImages(imageName, currentPage);
        if (data.hits.length === 0) {
          toast.info('sorry images not found');
          return;
        }
        const normalizedImages = API.normalizedImages(data.hits);
        setImages(prevImages => [...prevImages, ...normalizedImages]);
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        toast.error('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    addImages();
  }, [imageName, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const formSubmit = query => {
    setImageName(query);
    setImages([]);
    setCurrentPage(1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={formSubmit} />
      {images.length > 0 ? (
        <ImageGallery images={images} />
      ) : (
        <p className={css.looking}>What do you want to find? </p>
      )}

      {isLoading && (
        <div className={css.loading}>
          <Loader />
        </div>
      )}

      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}

      <Toaster position="top-center" />
    </div>
  );
}
