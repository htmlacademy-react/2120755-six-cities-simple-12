// Когда будет понимание по приходу данных, я переделаю в отрисовку циклом.

function Gallery(): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/room.jpg"
            alt="studio"
          />
        </div>
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/apartment-01.jpg"
            alt="studio"
          />
        </div>
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/apartment-02.jpg"
            alt="studio"
          />
        </div>
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/apartment-03.jpg"
            alt="studio"
          />
        </div>
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/studio-01.jpg"
            alt="studio"
          />
        </div>
        <div className="property__image-wrapper">
          <img
            className="property__image"
            src="img/apartment-01.jpg"
            alt="studio"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
