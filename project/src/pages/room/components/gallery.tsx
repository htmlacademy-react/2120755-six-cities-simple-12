// Когда будет понимание по приходу данных, я переделаю в отрисовку циклом.
import { photosSources } from '../../../utils/data';


function Gallery(): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          photosSources.map((photosSource) =>
            (
              <div key={photosSource} className="property__image-wrapper">
                <img
                  className="property__image"
                  src={photosSource}
                  alt="studio"
                />
              </div>)
          )
        }
      </div>
    </div>
  );
}

export default Gallery;
