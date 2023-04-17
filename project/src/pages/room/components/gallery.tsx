import { useSelector } from 'react-redux';
import { offerToShowImagesSelector } from 'store/reducers/chosenOffer';

function Gallery(): JSX.Element | null {
  const imagesCollection = useSelector(offerToShowImagesSelector);
  enum PhotosCount {
    Start = 0,
    End = 6,
  }

  if (imagesCollection === undefined) {
    return null;
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        { [...imagesCollection].slice(PhotosCount.Start, PhotosCount.End).map((images) =>
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
