import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import { IBaseOffer, ICity } from '../../types/offers';

interface IMapProps {
  city: ICity;
  points: IBaseOffer[];
  selectedPoint: IBaseOffer;
  namePage: string;
}

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

const Map = ({ city, points, selectedPoint, namePage }: IMapProps) => {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  const mapClassName: string = `${namePage === 'MainPage' ? 'cities__map' : (namePage === 'OfferPage' ? 'offer__map' : '') || ''} map`;

  useEffect(() => {
    if (map) {
      // Очистить все существующие маркеры
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      // Обновить центр и зум карты при смене города
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (selectedPoint?.id && point.id === selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, city]);

  return (
    <section
      className={mapClassName}
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
