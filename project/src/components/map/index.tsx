import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@hooks/use-map';
import { citySelector, offersSelector } from 'store/reducers/offers';
import { offerToMarkSelector, offerToShowSelector, offersNearbySelector } from 'store/reducers/chosenOffer';
import { citiesData } from '@utils/data';
import currentMarker from '@img/pin-active.svg';
import defaultMarker from '@img/pin.svg';

function choseIcon(Url: string) {
  return leaflet.icon({
    iconUrl: Url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}

function Map (): JSX.Element {
  const offersToShow = useSelector(offersSelector);
  const targetCity = useSelector(citySelector);
  const cityToShow = citiesData[targetCity];
  const offerToMark = useSelector(offerToMarkSelector);
  const chosenOffer = useSelector(offerToShowSelector);
  const chosenOfferNearby = useSelector(offersNearbySelector);
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityToShow);

  useEffect(() => {
    if (map && offersToShow && chosenOffer === undefined) {
      offersToShow.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: choseIcon(offer === offerToMark ? currentMarker : defaultMarker)
          })
          .addTo(map);
      });
    }
    if (map && chosenOffer){
      leaflet
        .marker({
          lat: chosenOffer.location.latitude,
          lng: chosenOffer.location.longitude,
        }, {
          icon: choseIcon(currentMarker)
        })
        .addTo(map);
      chosenOfferNearby?.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: choseIcon(defaultMarker)
          })
          .addTo(map);
      });
    }
  }, [map, offersToShow, offerToMark, cityToShow, chosenOffer, chosenOfferNearby]);

  return (
    <section style={
      {
        height: '100%',
        width: '100%',
      }
    }
    ref={mapRef}
    />);
}

export default Map;
