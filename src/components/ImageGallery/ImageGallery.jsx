import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
export default function ImageGallery({ cards, getBigPhoto }) {
  return (
    <ul className={css.ImageGallery}>
      {cards.map(({ webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={webformatURL}
            srs={webformatURL}
            getBigPhoto={getBigPhoto}
            alt={tags}
            bigPhoto={largeImageURL}
          />
        );
      })}
    </ul>
  );
}
