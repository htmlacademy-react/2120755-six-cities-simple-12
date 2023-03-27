import {useRef, useEffect} from 'react';
import useMap from '@hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from 'mocks/offers';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT } from '@utils/const';

type mapProps = {
  offersToShow: Offer[];
  offerToMark: Offer | null;
}

function choseIcon(Url: string) {
  return leaflet.icon({
    iconUrl: Url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}

function Map ({offersToShow, offerToMark}: mapProps): JSX.Element {
  const cityToShow = offersToShow[0];
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
    }

  }, [map, offersToShow, offerToMark]);

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


