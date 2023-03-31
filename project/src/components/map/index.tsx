import {useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@hooks/useMap';
import { Offer } from 'mocks/offers';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT } from '@utils/const';


type cityOffers = {
  city: string;
  offers: Offer[];
  hoveredOffer: Offer;
}

function choseIcon(Url: string) {
  return leaflet.icon({
    iconUrl: Url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}

function Map (): JSX.Element {
  const offersToShow = useSelector((state: cityOffers) => state.offers);
  const cityToShow: Offer = useSelector((state: cityOffers) => state.offers[0]);
  const offerToMark = useSelector((state: cityOffers) => state.hoveredOffer);
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityToShow);

  useEffect(() => {
    if (map) {
      offersToShow.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer === offerToMark)
              ? choseIcon(URL_MARKER_CURRENT)
              : choseIcon(URL_MARKER_DEFAULT)
          })
          .addTo(map);
      });
    } }, [map, offersToShow, offerToMark]);

  return (
    <section style={
      {
        height: '100%',
        width: `${window.location.pathname.includes('/offer/') ? '1144px' : '100%'}`,
        margin: `${window.location.pathname.includes('/offer/') ? 'auto' : ''}`}
    }
    ref={mapRef}
    />);
}

export default Map;


