import {useRef, useEffect} from 'react';
import useMap from '@hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from 'mocks/offers';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT } from '@utils/const';

type mapProps = {
  offersToShow: Offer[];
  offerToMark: Offer;
}

function Map ({offersToShow, offerToMark}: mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offersToShow);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offersToShow.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer === offerToMark)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, offersToShow, offerToMark]);

  return <section style={{height: '100%', width: '100%'}} ref={mapRef}></section>;

}

export default Map;
