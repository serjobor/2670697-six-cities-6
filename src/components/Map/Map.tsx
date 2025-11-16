import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants/map';
import { IBaseOffer, ICity } from '../../mocks/offers';

interface IMapProps {
  city: ICity;
  points: IBaseOffer[];
  selectedPoint: IBaseOffer;
}

const Map = ({ city, points, selectedPoint }: IMapProps) => {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, currentCustomIcon, defaultCustomIcon]);

  return (
    <section
      className='cities__map map'
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
