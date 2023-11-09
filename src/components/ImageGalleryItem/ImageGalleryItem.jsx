import css from './ImageGalleryItem.module.css';

export default function ImageGallery({ srs, alt, bigPhoto, getBigPhoto }) {
  return (
    <li id={bigPhoto} onClick={getBigPhoto} className="ImageGalleryItem">
      <img className={css.ImageGalleryItem} src={srs} alt={alt} />
    </li>
  );
}
