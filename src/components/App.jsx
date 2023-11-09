import { useState, useEffect } from 'react';
import 'animate.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modals from './Modal/Modal';
import Error from './Error/Error';
import getImage from '../api-ferch';

export default function App() {
  const [searchPhoto, setSearchPhoto] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState('');

  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bigUrl, setBigUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getImage(searchPhoto, page);
        setTotalPages(Math.ceil(data.totalHits / 12));
        setPhoto(prevPhoto => [...prevPhoto, ...data.hits]);
      } catch (error) {
        setError('Упссс, щось не так');
        setTotalPages(0);
        setPhoto([]);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (page !== 0) {
      fetchData();
    }
  }, [searchPhoto, page]);

  const getBigUrlPhoto = evt => {
    const bigPhotoId = evt.currentTarget.getAttribute('id');
    setBigUrl(bigPhotoId);
  };

  const onClick = event => {
    setError(null);
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const settingSearchOption = option => {
    if (searchPhoto !== option) {
      setError(null);
      setPhoto([]);
      setSearchPhoto(option);
      setPage(1);
      return;
    }

    setPage(prevState => prevState + 1);
    setLoading(true);

    return;
  };
  let dieRenderingBtn = totalPages > page;

  return (
    <>
      <Searchbar onSubmit={settingSearchOption} />
      {photo && photo.length > 0 && (
        <ImageGallery getBigPhoto={getBigUrlPhoto} cards={photo} />
      )}
      {loading && <Loader />}
      {dieRenderingBtn && <Button onClick={onClick} />}
      {bigUrl && <Modals url={bigUrl} onClose={() => setBigUrl(null)} />}
      {error && <Error title={error} />}
    </>
  );
}
