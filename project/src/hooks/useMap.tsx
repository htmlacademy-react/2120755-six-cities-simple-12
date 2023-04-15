import { useEffect, useState, MutableRefObject, useRef } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityLocation } from '@customTypes/index';

export function useMap(mapRef: MutableRefObject<HTMLElement | null>, cityToShow: CityLocation | undefined): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map !== null && cityToShow !== undefined) {
      map.setView([cityToShow.latitude, cityToShow.longitude], 13);
    }
  }, [map, cityToShow]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && cityToShow !== undefined) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityToShow.latitude,
          lng: cityToShow.longitude,
        },
        zoom: cityToShow.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [cityToShow, mapRef]);

  return map;
}

export default useMap;
