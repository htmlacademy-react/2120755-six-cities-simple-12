import { useSelector } from 'react-redux';
import { InitialState } from '@customTypes/store';

function Gallery(): JSX.Element {
  const imagesCollection = useSelector((state: InitialState) => state.offerToShow?.images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        { imagesCollection?.slice(0).sort(() => Math.random() - 0.5).slice(0, 6).map((images) =>
          (
            <div key={images} className="property__image-wrapper">
              <img
                className="property__image"
                src={images}
                alt="studio"
              />
            </div>)
        )}
      </div>
    </div>
  );
}

export default Gallery;
