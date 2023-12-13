import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Divider from '../Components/Divider';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig';

const locations = [
    {
        coordinates: [-74.5, 40],
        radius: 1000
    },
    {
        coordinates: [35.699005714533264, 51.33638524905276],
        radius: 1000
    },
    {
        coordinates: [35.70098380940479, 51.39117847652718],
        radius: 200
    },
    {
        coordinates: [35.71183652796547, 51.40704216281115],
        radius: 300
    }
]

const MapBox = () => {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig'
    });

    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        const initializeMap = () => {
            const newMap = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9, // starting zoom
            });

            // Add navigation controls to the map
            newMap.addControl(new mapboxgl.NavigationControl());

            setMap(newMap);
        };

        // Check if the map is not initialized
        if (!map) initializeMap();

        // Clean up on unmount
        return () => map?.remove();
    }, []);

    useEffect(() => {
        // Check if the map is initialized
        if (map) {
            // Add markers and circles to the map
            locations.forEach((location, index) => {
                const { coordinates, radius } = location;

                const latLng = new mapboxgl.LngLat(coordinates[0], coordinates[1]);

                // Add a marker to the map
                new mapboxgl.Marker().setLngLat(latLng).addTo(map);

                // Add a circle to the map
                map.addSource(`circle-source-${index}`, {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: coordinates,
                        },
                    },
                });

                map.addLayer({
                    id: `circle-layer-${index}`,
                    type: 'circle',
                    source: `circle-source-${index}`,
                    paint: {
                        'circle-color': '#FF0000',
                        'circle-radius': radius,
                    },
                });
            });

            // Clean up on unmount
            return () => {
                locations.forEach((_, index) => {
                    map.removeLayer(`circle-layer-${index}`);
                    map.removeSource(`circle-source-${index}`);
                });
            };
        }
    }, []);

    return (
        <>
            <div id="map" style={{ width: '100%', height: '100%' }} />
            <Divider />

            <Map
                style="mapbox://styles/mapbox/streets-v11"
                className='w-full h-[90%]'
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[32.14963227368696, 54.16016113907029]} />
                </Layer>
            </Map>;
        </>
    );
};

export default MapBox;