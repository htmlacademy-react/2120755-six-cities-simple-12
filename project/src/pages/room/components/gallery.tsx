type GalleryProps = {
  imagesCollection: [...string[]];
}

function Gallery({imagesCollection}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imagesCollection.map((images) =>
            (
              <div key={images} className="property__image-wrapper">
                <img
                  className="property__image"
                  src={images}
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
