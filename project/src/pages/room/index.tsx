import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import Reviews from './components/reviews';
import ReviewForm from './components/reviewForm';
import { options } from '../../utils/data';

function Room() {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__container container">
          <Gallery />
          <div className="property__wrapper">
            <Overview roomOptions={options}/>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                <Reviews />
              </ul>
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
              Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <Suggestions/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Room;
